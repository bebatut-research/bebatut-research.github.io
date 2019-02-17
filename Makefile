# Settings

default: help

clean: ## clean up junk files
	@rm -rf _site
	@rm -rf .sass-cache
	@rm -rf .bundle
	@rm -rf vendor
.PHONY: clean

install: clean ## install dependencies
	git submodule init && \
	git submodule update && \
	gem install bundler && \
	bundle install
.PHONY: install

serve: ## run a local server (You can specify PORT=, HOST=, and FLAGS= to set the port, host or to pass additional flags)
	bundle exec jekyll serve
.PHONY: serve

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.PHONY: help