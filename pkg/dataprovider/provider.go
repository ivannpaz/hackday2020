package dataprovider

import "io/ioutil"

type Provider interface {
	Read(filename string) ([]byte, error)
}

type FSProvider struct {
	base string
}

func New(base string) *FSProvider {
	return &FSProvider{
		base: base,
	}
}

func (pr *FSProvider) Read(filename string) ([]byte, error) {
	data, err := ioutil.ReadFile(pr.base + filename)
	if err != nil {
		return []byte{}, err
	}

	return data, nil
}
