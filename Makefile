.PHONY: build

export GO111MODULE=on
export CGO_ENABLED=0


build:
	go build -o server

run:
	go run main.go

clean:
	rm am-route-test
