var gulp = require('gulp'),
  userref = require('gulp-useref'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass');

gulp.task('browser-sync', function() {

      browserSync.init({
        server: {
          baseDir: "src/",
          routes: {
            "/bower_components": 'bower_components'

          }
        }
      });
    } //END of gulp.task browser-sync

    gulp.task('serve', ['sass'], function() {
      var sass = require('gulp-sass');
      browserSync.init({
        server: "src/"
      });

      gulp.watch('src/scss/*.scss', ['sass']);
      gulp.watch('src/index.html').on('change', browserSync.reload);

    });

    gulp.task('sass', function() {
      var sass = require('gulp-sass');
      gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/'))
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('dist/css/'))
    }); //END of gulp.task(sass)

    gulp.watch('watch:sass', function() {

      gulp.watch('src/scss/*.scss', ['sass'], function() {});
      gulp.watch('src/index.html', ['build']);

    })

    gulp.task('clean', function(done){
     var del = require('del');

     del([
       'dist/**/*.*',
       'dist/**/.*',
       'dist/*.*',
       'dist/*',
       '!dist/.gitignore'
     ], done);
    }); //END gulp.task(clean)

    gulp.task('build', ['sass'], function() {
      gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
      gulp.src([
          'src/*.html', '!src/scss', 'src/css/*.css'
        ])
        .pipe(gulp.dest('dist/'));
    });
