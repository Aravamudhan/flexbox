const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
gulp.task("autoprefix", () => {
    gulp.src(["navstyle.css", "navstyle2.css"]).pipe(autoprefixer({
        browsers: ['last 2 version']
    })).pipe(gulp.dest("build"));
});
gulp.task("watch", () => {
    gulp.watch(["navstyle.css", "navstyle2.css"], ["autoprefix"]);
});
gulp.task("default", ["watch"]);