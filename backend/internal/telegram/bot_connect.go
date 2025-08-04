package telegram

import (
	"log"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

var Bot *tgbotapi.BotAPI

func InitBot() {
	bot_token := "8385761920:AAEnFlAy6YPdyxjunr9dkZmD-Esl1-4Apz8"

	var err error

	Bot, err = tgbotapi.NewBotAPI(bot_token)
	if err != nil {
		log.Panic("Ошибка создания бота:", err)
	}
	Bot.Debug = true

	log.Printf("Авторизован как %s", Bot.Self.UserName)

}
