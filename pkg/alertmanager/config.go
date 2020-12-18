package alertmanager

// Config ...
type Config struct {
	Receivers []struct {
		Name         string `json:"name"`
		SlackConfigs []struct {
			APIURL string `json:"api_url"`
			Text   string `json:"text"`
			Title  string `json:"title"`
		} `json:"slack_configs"`
		PagerdutyConfigs []struct {
			ServiceKey string `json:"service_key"`
			URL        string `json:"url"`
		} `json:"pagerduty_configs,omitempty"`
	} `json:"receivers"`
	Route struct {
		GroupBy        []string `json:"group_by"`
		Receiver       string   `json:"receiver"`
		RepeatInterval string   `json:"repeat_interval"`
		Routes         []struct {
			MatchRe struct {
				ClientID string `json:"client_id"`
			} `json:"match_re"`
			Receiver string `json:"receiver"`
			Routes   []struct {
				MatchRe struct {
					Env string `json:"env"`
				} `json:"match_re"`
				Receiver string `json:"receiver"`
			} `json:"routes,omitempty"`
		} `json:"routes"`
	} `json:"route"`
	Templates []interface{} `json:"templates"`
}
