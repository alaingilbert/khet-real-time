.PHONY: all release install watch-typescript count server deploy heroku start


all: release


start:
	foreman start


server:
	node app/app.js


install:
	npm install


watch-typescript:
	./node_modules/.bin/supervisor -w ./src/ -n exit -e 'ts' -x make --


release:
	./node_modules/.bin/tsc src/khet/Game.ts --out app/public/javascripts/compiled.js


count:
	find ./src/ -name '*.ts' | xargs wc -l


deploy:
	git push heroku master


heroku: release server
