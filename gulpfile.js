var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
 
// JS Task
gulp.task('minify-js', function () {
  gulp.src('./public/app/**/*.js') // path to your files
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./public/app/build'));
});
 
// CSS Task
gulp.task('minify-css', function () {
  gulp.src('./public/css/*.css') // path to your file
  .pipe(concat('app.css'))
  .pipe(minifyCss())
  .pipe(gulp.dest('./public/css/build'));
});

gulp.task('watch-js', function() {
  gulp.watch('./public/app/**/*.js', ['minify-js']);
}); 