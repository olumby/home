var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');


gulp.task('less', function () {
  gulp.src('./public/css/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
    gulp.watch('./public/*/*.less', ['less']);
});