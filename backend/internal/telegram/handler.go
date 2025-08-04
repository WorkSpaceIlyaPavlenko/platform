package telegram

import (
	"encoding/json"
	"net/http"
	"server/internal/model"
)

func TelegramPostReq(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var req model.RequestModel
		err := json.NewDecoder(r.Body).Decode(&req)
		if err != nil {
			http.Error(w, "Invalid body", http.StatusBadRequest)
			return
		}
		go TelegramRequestPush(&req)
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	} else {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}
