package handler

import (
	"encoding/json"
	"net/http"
	"server/internal/repo"
)

func RegisterGetAllUsers(w http.ResponseWriter, r *http.Request) {
	usersList, err := repo.GetAllUsers()
	if err != nil {
		http.Error(w, "Ошибка получения пользователей: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(usersList)
}
