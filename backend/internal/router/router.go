package router

import (
	"fmt"
	"net/http"
	"server/internal/handler"
	"server/internal/telegram"

	"github.com/go-chi/chi/v5"
)

//	func helloHandler(w http.ResponseWriter, r *http.Request) {
//		fmt.Fprintln(w, "Main")
//	}
func Ping(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Ping")
}

func New() http.Handler {
	mux := chi.NewRouter()

	mux.Get("/", handler.RegisterGetAllUsers)
	mux.Get("/ping", Ping)
	mux.Post("/api/telegram/form", telegram.TelegramPostReq)
	// mux.Post("/telegram", func(w http.ResponseWriter, r *http.Request) {})

	return mux
}
