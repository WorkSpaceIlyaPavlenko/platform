package telegram

import (
	"server/internal/model"
	"time"
)

type OrderSession struct {
	UserID    int64
	Step      string
	Data      map[string]string
	Files     []model.FileItem
	StartedAt time.Time
}
