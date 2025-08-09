package main

import (
	"fmt"
	"net/http"

	// "server/internal/db"
	"server/internal/router"
	telegram "server/internal/telegram"
	"time"
)

func main() {

	// db.Init()

	telegram.InitBot()
	go telegram.StartTelregramLisener()

	router := router.New()

	server := &http.Server{
		Addr:         ":8080",
		Handler:      router,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	fmt.Println("🚀 Сервер запущен на", server.Addr)

	err := server.ListenAndServe()
	if err != nil {
		fmt.Println("Error starting server", err)
	}
}
