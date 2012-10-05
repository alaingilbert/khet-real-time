.PHONY: all release install watch-typescript count


all: release


install:
	sudo npm install -g supervisor
	sudo npm install -g typescript


watch-typescript:
	supervisor -w ./src/ -n exit -e 'ts' -x make --


release:
	tsc src/khet/Game.ts --out app/public/javascripts/compiled.js

count:
	find ./ -name '*.ts' | xargs wc -l
