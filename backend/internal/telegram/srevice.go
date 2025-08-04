package telegram

import (
	"log"
	"time"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

func StartTelregramLisener() {
	u := tgbotapi.NewUpdate(0)
	u.Timeout = 60

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
				BotCommands(*update.Message)
			}

			if update.CallbackQuery != nil {
				KeyBordCalback(update)
			}
		}()
		time.Sleep(3 * time.Second)
	}
}
func BotCommands(updt tgbotapi.Message) {

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
	// log.Panicln("CAAaaaAAAAAAAALLL", calback)
	// // command := calback.Message.Command()

	// switch calback {
	// case "auth":
	// 	(*msg) = "Процесс аунтефикации"
	// case "my_order":
	// 	(*msg) = "Список ваших заков"
	// case "create_order":
	// 	(*msg) = "Процесс создания заказа"
	// }
}
