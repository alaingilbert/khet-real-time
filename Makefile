.PHONY: all release install watch-typescript


all: release


install:
	sudo npm install -g supervisor
	sudo npm install -g typescript


watch-typescript:
	supervisor -w ./src/ -n exit -e 'ts' -x make --


release:
	tsc src/khet/Game.ts --out public/js/compiled.js
