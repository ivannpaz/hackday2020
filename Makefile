.PHONY: server ui run clean

export GO111MODULE=on
export CGO_ENABLED=0


server:
	go build -o server

ui:
	cd web && npm run build

runserver:
	go run main.go

clean:
	rm am-route-test

build:
	#
