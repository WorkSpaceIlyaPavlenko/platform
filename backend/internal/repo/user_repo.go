package repo

import (
	"server/internal/db"
	"server/internal/model"
)

func GetAllUsers() ([]model.User, error) {
	query := `select * from users`
	rows, err := db.DB.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var users []model.User

	for rows.Next() {
		var user model.User
		err := rows.Scan(&user.ID, &user.PhoneNumber, &user.Role)
		if err != nil {
			return nil, nil
		}
		users = append(users, user)
	}

	return users, nil
}
