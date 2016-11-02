.PHONY: clean watch deploy

compiled.css: css/*.css
	cat css/normalize.css css/typebase.css css/typebase.css css/fonts.css css/main.css > compiled.css

clean:
	rm -f compiled.css

watch:
	make
	@fswatch -o0 css/ | xargs -0 -n1 -I{} make

deploy: compiled.css
	scp -r index.html logo-square.png compiled.css batcave:document_root/vanoix/
