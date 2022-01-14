db_conf_path :=

ifeq ($(option), postgres)
	db_conf_path = ./sql/docker-compose-postgres.yml
endif

ifeq ($(option), mongodb)
	db_conf_path = ./nosql/docker-compose-mongodb.yml
endif

.PHONY: up

up:
	docker-compose -f $(db_conf_path) up -d

.PHONY: down

down:
	docker-compose -f $(db_conf_path) down -v --rmi local