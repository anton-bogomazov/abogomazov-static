.PHONY: all build cv blog hooks help

all: build

build: cv blog

cv:
	@./scripts/gen-cv-pdf

blog:
	@./scripts/gen-blog-posts

hooks:
	@./scripts/install-hooks.sh

help:
	@echo "Available commands:"
	@echo "  make build         - Generate both CV PDF and blog posts"
	@echo "  make cv            - Generate CV PDF in assets/cv.pdf"
	@echo "  make blog          - Generate blog posts and blog/index.html"
	@echo "  make hooks         - Install git pre-push hooks"
	@echo "  make help          - Show this help message"
