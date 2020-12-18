package alertmanager

import (
	"encoding/json"

	"github.com/gofiber/fiber/v2"
	"github.com/ivannpaz/hackday2020/pkg/d3"
)

// NewHandler ...
func NewHandler(data []byte) func(c *fiber.Ctx) error {
	return func(c *fiber.Ctx) error {
		return c.JSON(generate(data))
	}
}

func generate(data []byte) d3.Node {
	jdata := Config{}

	err := json.Unmarshal(data, &jdata)
	if err != nil {
		return d3.Node{
			Name: "Failed to load tree",
		}
	}

	routing := recurseTree(d3.Node{}, jdata.Route, true)

	return routing
}

func recurseTree(routing d3.Node, route Route, isRoot bool) d3.Node {
	routing.Name = route.Receiver

	if len(route.Routes) > 0 {
		if !isRoot {
			wrap := d3.Node{}
			wrap.Matchers = route.MatchRe
			wrap.Children = append(wrap.Children, routing)
			routing = wrap
		}

		for _, rt := range route.Routes {
			routing.Children = append(routing.Children, recurseTree(d3.Node{}, rt, false))
		}
	} else if !isRoot {
		return d3.Node{
			Children: []d3.Node{routing},
			Matchers: route.MatchRe,
		}
	}

	return routing
}
