package rules

// Config ...
type Config struct {
	Groups []struct {
		Name  string `json:"name"`
		Rules []struct {
			Alert       string `json:"alert"`
			Annotations struct {
				Description string `json:"description"`
				Level       string `json:"level"`
				Runbook     string `json:"runbook"`
				Title       string `json:"title"`
			} `json:"annotations"`
			Expr   string `json:"expr"`
			For    string `json:"for"`
			Labels struct {
				Service  string `json:"service"`
				Severity string `json:"severity"`
				Team     string `json:"team"`
			} `json:"labels"`
		} `json:"rules"`
	} `json:"groups"`
}
