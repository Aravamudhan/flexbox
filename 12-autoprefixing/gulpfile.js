const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("style", () => {
    gulp.src("style.css")
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(gulp.dest("build"));
});
gulp.task("watch", () => {
    // When ever style.css changes re-run the tasks passed in the array
    gulp.watch("style.css", ["style"]);
});