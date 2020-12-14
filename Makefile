.PHONY: build

export GO111MODULE=on
export CGO_ENABLED=0


build:
	go build -o server

ui:
	cd web && npm run build

run:
	go run main.go

clean:
	rm am-route-test
