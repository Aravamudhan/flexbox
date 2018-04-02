const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

const styleFile = "style/layout.css";
gulp.task("style", () => {
    gulp.src(styleFile)
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(gulp.dest("build"));
});
gulp.task("watch", () => {
    gulp.watch(styleFile, ["style"]);
});
gulp.task("default", ["watch"]);