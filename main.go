package main

import (
	"io/ioutil"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/ivannpaz/hackday2020/pkg/alertmanager"
)

func main() {
	configData, err := ioutil.ReadFile("./data/config_pacho.json")
	if err != nil {
		panic(err)
	}

	app := fiber.New(fiber.Config{
		Prefork:       false,
		CaseSensitive: true,
		StrictRouting: true,
		ServerHeader:  "Fiber",
	})

	app.Use(cors.New())

	app.Static("/", "./web/build")
	app.Get("/api/alertmanager", alertmanager.NewHandler(configData))

	app.Listen(":9000")
}
