const gulp      = require("gulp");
const sass      = require("gulp-sass");
const rename    = require("gulp-rename");

// grabs all of scss code and turns it into a singular css file
gulp.task("sass", () => {
    return gulp.src("./public/css/styles.scss")
        .pipe(sass())
        .pipe(rename("bundle.css"))
        .pipe(gulp.dest("./dist"));
});