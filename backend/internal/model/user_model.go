package model

type User struct {
	ID          int    `json:"id"`
	PhoneNumber string `json:"phone"`
	Role        string `json:"role"`
}
