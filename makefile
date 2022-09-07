default: deploy-dev

deploy-prod:
	docker build --build-arg type_build=prod -f Dockerfile -t events-scraping-frontend:prod .
	docker-compose -f composes/events-scraping-frontend-prod/docker-compose.yml up -d

deploy-dev:
	docker build --build-arg type_build=dev -f Dockerfile -t events-scraping-frontend:dev .
	docker-compose -f composes/events-scraping-frontend-dev/docker-compose.yml up -d