package db

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Init() {
	contStr := "host=localhost port=5433 user=postgres password=TvoiSempa1 dbname=platfrom sslmode=disable"

	var err error

	DB, err = sql.Open("postgres", contStr)
	if err != nil {
		log.Fatal("Error conect", err)
	}
	err = DB.Ping()
	if err != nil {
		log.Fatal("Error opne conect", err)
	}

	fmt.Printf("Succues connect")

}
