package model

type FileItem struct {
	FileID   string
	FileName string
}
type User struct {
	ID          int    `json:"id"`
	PhoneNumber string `json:"phone"`
	Role        string `json:"role"`
}
type RequestModel struct {
	UserName  string `json:"name"`
	Email     string `json:"email"`
	Messanger string `json:"telegramm"`
	Comment   string `json:"comment"`
	Files     []FileItem
}
