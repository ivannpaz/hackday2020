package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New(fiber.Config{
		Prefork:       false,
		CaseSensitive: true,
		StrictRouting: true,
		ServerHeader:  "Fiber",
	})

	app.Static("/", "./web/public")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("OK REALLY?")
	})

	app.Listen(":9000")
}
