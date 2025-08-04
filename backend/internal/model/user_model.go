package model

type User struct {
	ID          int    `json:"id"`
	PhoneNumber string `json:"phone"`
	Role        string `json:"role"`
}
type RequestModel struct {
	UserName  string `json:"name"`
	Email     string `json:"email"`
	Messanger string `json:"mes"`
	Comment   string `json:"comment"`
}
