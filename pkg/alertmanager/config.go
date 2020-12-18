package alertmanager

// Config ...
type Config struct {
	Receivers []Receiver `json:"receivers"`
	Route     Route      `json:"route"`
}

// Route ...
type Route struct {
	GroupBy        []string          `json:"group_by,omitempty"`
	Receiver       string            `json:"receiver,omitempty"`
	RepeatInterval string            `json:"repeat_interval,omitempty"`
	MatchRe        map[string]string `json:"match_re,omitempty"`
	Routes         []Route           `json:"routes"`
}

// Receiver ...
type Receiver struct {
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
}
