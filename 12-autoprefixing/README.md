## Auto prefixing the CSS files through gulp
* Adding vendor prefixes is necessary to flexbox for cross-browser support
* gulp is a tool that automates various tasks in the development work flow.
* Install gulp globally by ```npm install gulp -g```
* To install gulp in the existing project ``` npm install gulp --save-dev```
* Create gulpfile.js
* Install autoprefixing by ```npm install gulp-autoprefixer --save-dev```
* Setting up a tasks named style that runs the autoprefixer for the file named style.css and
outputs the result into the directory called build.
```
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
gulp.task("style", () => {
    gulp.src("style.css")
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(gulp.dest("build"));
});
```
* Now a file named build/style.css will be created and we should point to that file instead of the style.css.