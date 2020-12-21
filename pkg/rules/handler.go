package rules

import (
	"encoding/json"

	"github.com/gofiber/fiber/v2"
	"github.com/ivannpaz/hackday2020/pkg/dataprovider"
)

// Response ...
type Response struct {
	Labels map[string][]string `json:"labels"`
}

type processor struct {
	dpr dataprovider.Provider
}

// NewLabelsHandler ...
func NewLabelsHandler(dpr dataprovider.Provider) func(c *fiber.Ctx) error {
	r := processor{dpr: dpr}

	return func(c *fiber.Ctx) error {
		return c.JSON(r.generate())
	}
}

func (r *processor) generate() Response {
	resp := Response{}
	labels := make(map[string][]string)

	data, err := r.dpr.Read("rules.json")
	if err != nil {
		return resp
	}

	jdata := Config{}
	err = json.Unmarshal(data, &jdata)
	if err != nil {
		return resp
	}

	for _, grp := range jdata.Groups {
		for _, rlz := range grp.Rules {
			for key, lbl := range rlz.Labels {
				// check if resp[labelName] exists
				if _, ok := labels[key]; !ok {
					labels[key] = []string{""}
				}

				// HackityHack 1
				if len(lbl) > 2 && lbl[0:2] == "{{" {
					continue
				}

				if !contains(labels[key], lbl) {
					labels[key] = append(labels[key], lbl)
				}
			}
		}
	}

	// HackityHack 2
	if _, ok := labels["severity"]; !ok {
		labels["severity"] = []string{""}
	}
	// HackityHack 3
	if !contains(labels["severity"], "critical") {
		labels["severity"] = append(labels["severity"], "critical")
	}
	// HackityHack 4
	if !contains(labels["severity"], "warning") {
		labels["severity"] = append(labels["severity"], "warning")
	}

	resp.Labels = labels

	return resp
}

// Contains tells whether a contains x.
func contains(a []string, x string) bool {
	for _, n := range a {
		if x == n {
			return true
		}
	}
	return false
}
