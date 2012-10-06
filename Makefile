.PHONY: all release install watch-typescript count server deploy heroku


all: release


server:
	node app/app.js


install:
	sudo npm install -g supervisor
	sudo npm install -g typescript
	npm install


watch-typescript:
	supervisor -w ./src/ -n exit -e 'ts' -x make --


release:
	tsc src/khet/Game.ts --out app/public/javascripts/compiled.js


count:
	find ./ -name '*.ts' | xargs wc -l


deploy:
	git push heroku master


heroku: release server
