package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/ivannpaz/hackday2020/pkg/alertmanager"
	"github.com/ivannpaz/hackday2020/pkg/dataprovider"
	"github.com/ivannpaz/hackday2020/pkg/rules"
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
	app.Use(logger.New())

	app.Static("/", "./web/build")
	app.Get("/api/alertmanager/routes/:env", alertmanager.NewRoutingHandler(dataProvider))
	app.Get("/api/alertmanager/labels/", rules.NewLabelsHandler(dataProvider))

	app.Listen(":9000")
}
