run: build
	docker run async_exec_tester:latest

build:
	docker build . -t async_exec_tester


