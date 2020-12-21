package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/ivannpaz/hackday2020/pkg/alertmanager"
	"github.com/ivannpaz/hackday2020/pkg/dataprovider"
)

func main() {
	dataProvider := dataprovider.New("./data/")

	app := fiber.New(fiber.Config{
		Prefork:       false,
		CaseSensitive: true,
		StrictRouting: true,
		ServerHeader:  "Fiber",
	})

	app.Use(cors.New())

	app.Static("/", "./web/build")
	app.Get("/api/alertmanager/routes/:env", alertmanager.NewHandler(dataProvider))

	app.Listen(":9000")
}
