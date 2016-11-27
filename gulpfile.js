// const gulp      = require("gulp");
// const rename    = require("gulp-rename");
// const sass      = require("gulp-sass");
// const cssMin    = require("gulp-clean-css");
// const concat    = require("gulp-concat");
// const uglify    = require("gulp-uglify");
// const bower     = require("main-bower-files");
// const filter    = require("gulp-filter");
// const filterCSS = filter("**/*.css", { restore: true});
// const filterJS  = filter("**/*.js");

// // gulp.task("bower", () => {
// //   return gulp.src(bower())
// //     // .pipe(filterCSS)
// //     // .pipe(sass())
// //     // .pipe(rename("vendor.css"))
// //     // .pipe(gulp.dest("public/dist/css"))
// //     // .pipe(filterCSS.restore)
// //     // .pipe(filterJS)
// //     .pipe(concat("vendor.js"))
// //     .pipe(gulp.dest("public/dist/js"));
// // });

// // grabs all of scss code and turns it into a singular css file
// gulp.task("sass", () => {
//   return gulp.src("public/src/css/style.scss")
//     .pipe(sass())
//     .pipe(gulp.dest("public/dist/css"));
// });

// // grabs all of the js code and turns it into a singular js file
// gulp.task("js", () => {
//   return gulp.src(["public/src/js/**/app.js", "public/src/js/**/*.js"])
//     .pipe(concat('app.js'))
//     .pipe(gulp.dest("public/dist/js"));
// });

// // minifies the new dist/css and dist/js files
// gulp.task("minify",["sass", "js"], () => {
//   return gulp.src(["public/dist/css/**/*", "public/dist/js/**/*"])
//     .pipe(filterCSS)
//     .pipe(cssMin())
//     .pipe(rename("style.min.css"))
//     .pipe(gulp.dest("public/dist/css"))
//     .pipe(filterCSS.restore)
//     .pipe(filterJS)
//     .pipe(uglify())
//     .pipe(rename("app.min.js"))
//     .pipe(gulp.dest("public/dist/js"))
// });

// // watches for changes in our scss files and then reruns the above code
// gulp.task("watch", () => {
//   gulp.watch(["public/src/css/**.scss", "public/src/js/**.js", "public/index.html"], ["minify"]);
// });

// // run to initially build the css dist directory
// gulp.task("build", ["minify"]);