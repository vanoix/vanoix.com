.PHONY: watch deploy

compiled.css: css/*.css
	cat css/normalize.css css/typebase.css css/typebase.css css/fonts.css css/main.css > compiled.css

watch:
	fswatch -o css/ | make

deploy: compiled.css
	scp -r index.html logo-square.png compiled.css batcave:document_root/vanoix/v2
