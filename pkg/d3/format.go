package d3

// Node ...
type Node struct {
	Name     string            `json:"name"`
	Children []Node            `json:"children"`
	Matchers map[string]string `json:"matchers"`
}
