package rules

// Config ...
type Config struct {
	Groups []struct {
		Name  string `json:"name"`
		Rules []struct {
			Alert       string            `json:"alert"`
			Annotations map[string]string `json:"annotations"`
			Expr        string            `json:"expr"`
			For         string            `json:"for"`
			Labels      map[string]string `json:"labels"`
		} `json:"rules"`
	} `json:"groups"`
}
