package telegram

import (
	"fmt"
	"log"
	"server/internal/model"
	"strings"
	"time"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

func StartTelregramLisener() {
	u := tgbotapi.NewUpdate(0)
	u.Timeout = 60

	var sessions = make(map[int64]*OrderSession)

	updates := Bot.GetUpdatesChan(u)

	for update := range updates {

		func() {
			defer func() {
				if r := recover(); r != nil {
					log.Println("⚠️ Panic recovered:", r)
				}
			}()

			log.Println("🟢 Update received")

			if update.Message != nil {
				BotCommands(*update.Message, sessions)
			}

			if update.CallbackQuery != nil {
				KeyBordCalback(update)
			}
			session, ok := sessions[update.Message.From.ID]
			if ok {
				userID := update.Message.From.ID
				chatID := update.Message.Chat.ID
				switch session.Step {
				case "name":
					session.Data["name"] = update.Message.Chat.UserName
					session.Step = "email"
					Bot.Send(tgbotapi.NewMessage(chatID, "📧 Введите email:"))

				case "email":
					session.Data["email"] = update.Message.Text
					session.Step = "contact"
					Bot.Send(tgbotapi.NewMessage(chatID, "📱 Введите альтернативный способ связи (например, Telegram @username или номер):"))

				case "contact":
					session.Data["contact"] = update.Message.Text
					session.Step = "description"
					Bot.Send(tgbotapi.NewMessage(chatID, "📝 Опишите тип услуги, желаемый бюджет и сроки:"))

				case "description":
					session.Data["description"] = update.Message.Text
					session.Step = "files"
					Bot.Send(tgbotapi.NewMessage(chatID, "📎 Прикрепите файлы (если есть ТЗ, макеты и т.д.) или напишите 'нет':"))

				case "files":
					if session.Files == nil {
						session.Files = []model.FileItem{}
					}

					if update.Message.Document != nil {
						session.Files = append(session.Files, model.FileItem{
							FileID:   update.Message.Document.FileID,
							FileName: update.Message.Document.FileName,
						})
						Bot.Send(tgbotapi.NewMessage(chatID, "📎 Файл добавлен. Можешь прикрепить ещё или напиши 'готово'"))
						return

					} else if update.Message.Photo != nil {
						photo := update.Message.Photo[len(update.Message.Photo)-1]
						session.Files = append(session.Files, model.FileItem{
							FileID:   photo.FileID,
							FileName: "photo.jpg",
						})
						Bot.Send(tgbotapi.NewMessage(chatID, "🖼 Фото добавлено. Можешь прикрепить ещё или напиши 'готово'"))
						return

					} else if strings.ToLower(update.Message.Text) == "готово" {
						session.Step = "done"

						go TelegramRequestPush(&model.RequestModel{
							UserName:  session.Data["name"],
							Email:     session.Data["email"],
							Messanger: session.Data["contact"],
							Comment:   session.Data["description"],
							Files:     session.Files,
						})

						Bot.Send(tgbotapi.NewMessage(chatID, "✅ Спасибо! Заявка получена. Мы свяжемся с вами."))
						delete(sessions, userID)
						return
					} else {
						Bot.Send(tgbotapi.NewMessage(chatID, "⚠️ Пожалуйста, прикрепите файл или напишите 'готово'"))
					}
				}

			}

		}()
		time.Sleep(3 * time.Second)
	}
}
func BotCommands(updt tgbotapi.Message, sessions map[int64]*OrderSession) {

	cmd := updt.Command()
	chatID := updt.Chat.ID
	var text string
	caybordReturn := false

	switch cmd {
	case "auth":
		text = "Процесс авторизации"
	case "my_order":
		text = "Меню заказов"
		caybordReturn = true
	case "create_order":
		text = "Создание заказа"
		sessions[chatID] = &OrderSession{
			UserID:    updt.Chat.ID,
			Step:      "name",
			Data:      make(map[string]string),
			StartedAt: time.Now(),
		}
	case "chat":
		text = "Создан чат со специалистом"
	}

	if len(text) > 1 {
		msg := tgbotapi.NewMessage(chatID, text)
		if caybordReturn {
			msg.ReplyMarkup = tgbotapi.NewInlineKeyboardMarkup(
				tgbotapi.NewInlineKeyboardRow(
					tgbotapi.NewInlineKeyboardButtonData("📦 Активные заказы", "my_order_active"),
					tgbotapi.NewInlineKeyboardButtonData("📦 Закртые заказы", "my_order_close"),
				),
			)
		}
		if _, err := Bot.Send(msg); err != nil {
			log.Println("❌ Ошибка отправки сообщения:", err)
		}
	}
}
func KeyBordCalback(update tgbotapi.Update) {

	calback := update.CallbackQuery.Data
	log.Println("🔘 Callback:", calback)
	if _, err := Bot.Request(tgbotapi.NewCallback(update.CallbackQuery.ID, "✅")); err != nil {
		log.Println("❌ Ошибка при ответе на колбэк:", err)
	}
}

func TelegramRequestPush(req *model.RequestModel) {
	chatID := -1002790831188

	var messageLines []string
	if req.UserName != "" {
		messageLines = append(messageLines, fmt.Sprintf("👤 Имя: %s", req.UserName))
	}
	if req.Email != "" {
		messageLines = append(messageLines, fmt.Sprintf("📧 Email: %s", req.Email))
	}
	if req.Messanger != "" {
		messageLines = append(messageLines, fmt.Sprintf("💬 Мессенджер: %s", req.Messanger))
	}
	if req.Comment != "" {
		messageLines = append(messageLines, fmt.Sprintf("📝 Комментарий: %s", req.Comment))
	}
	fullMessage := strings.Join(messageLines, "\n")

	// Сначала текст
	_, err := Bot.Send(tgbotapi.NewMessage(int64(chatID), fullMessage))
	if err != nil {
		log.Println("❌ Ошибка при отправке сообщения:", err)
	}

	// Потом все файлы
	for _, file := range req.Files {
		doc := tgbotapi.NewDocument(int64(chatID), tgbotapi.FileID(file.FileID))
		doc.Caption = fmt.Sprintf("📎 %s", file.FileName)
		_, err := Bot.Send(doc)
		if err != nil {
			log.Println("❌ Ошибка при отправке файла:", err)
		}
	}
}
