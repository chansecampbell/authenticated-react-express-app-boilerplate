const gulp      = require("gulp");
const rename    = require("gulp-rename");
const sass      = require("gulp-sass");
const cssMin    = require("gulp-clean-css");
const concat    = require("gulp-concat");
const uglify    = require("gulp-uglify");
const filter    = require("gulp-filter");
const filterCSS = filter("**/*.css", { restore: true});
const filterJS  = filter("**/*.js");

// grabs all of scss code and turns it into a singular css file
gulp.task("sass", () => {
    return gulp.src("src/css/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"));
});

// grabs all of the js code and turns it into a singular js file
gulp.task("js", () => {
    const WebpackConf = require("./webpack.config.js");
    const webpack = require('webpack-stream');
    return gulp.src("src/app.jsx")
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest("dist/js"));
});

// minifies the new dist/css and dist/js files
gulp.task("minify",["sass", "js"], () => {
    return gulp.src(["dist/css/style.css", "dist/js/app.js"])
        .pipe(filterCSS)
        .pipe(cssMin())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(filterCSS.restore)
        .pipe(filterJS)
        .pipe(uglify())
        .pipe(rename("app.min.js"))
        .pipe(gulp.dest("dist/js"))
});
        

// watches for changes in our scss files and then reruns the above code
gulp.task("watch", () => {
  gulp.watch(["src/css/**.scss", "src/js/**.js", "src/app.js"], ["minify"]);
});

// run to initially build the css dist directory
gulp.task("build", ["minify"]);