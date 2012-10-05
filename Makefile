.PHONY: all release install watch-typescript count


CHDIR_SHELL := $(SHELL)
define chdir
	$(eval _D=$(firstword $(1) $(@D)))
	$(info $(MAKE): cd $(_D)) $(eval SHELL = cd $(_D); $(CHDIR_SHELL))
endef


all: release


install:
	sudo npm install -g supervisor
	sudo npm install -g typescript
	$(call chdir, ./app)
	npm install

watch-typescript:
	supervisor -w ./src/ -n exit -e 'ts' -x make --


release:
	tsc src/khet/Game.ts --out app/public/javascripts/compiled.js

count:
	find ./ -name '*.ts' | xargs wc -l
