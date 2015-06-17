/*
var gulp = require('gulp');
gulp.task('do-something', function() {
            //console.log(arguments); console.log('I did something');
});
*/

var gulp = require('gulp');

gulp.task('sass', function(){

  var sass = require('gulp-sass');
  gulp.src('src/scss/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/css/'));
})

gulp.task('build', [ 'sass' ], function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
    gulp.src([
            'src/*.html', '!src/scss', 'src/css/*.css'
        ])
        .pipe(gulp.dest('dist/'));
});
