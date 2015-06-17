var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('browser-sync', function() {

      browserSync.init({
        server: {
          baseDir: "./"
        }
      });
    } //End of gulp.task browser-sync



    gulp.task('serve', ['sass'], function() {

      browserSync.init({
        server: "src/"
      });

      gulp.watch('src/scss/*.scss', ['sass']);
      gulp.watch('src/index.html').on('change', browserSync.reload);

    });

    gulp.task('sass', function() {
      var sass = require('gulp-sass');
      gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/main.css'))
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('dist/css/'))
    }); //End of gulp.task(sass)
    gulp.watch('watch:sass', function() {

      gulp.watch('src/scss/*.scss', ['sass'], function() {
        console.log('File changed');
      });
      gulp.watch('src/index.html', ['build']);

    })


    gulp.task('build', ['sass'], function() {

      //! means no scss files
      gulp.src(['src/*', '!src/scss']) //this is basically (gulpfrom())

      .pipe(gulp.dest('dist/')); //.dest refers to the destination. This is basically(gulp .into)
      //We are piping to a destination

    }); === === =
    /*
    var gulp = require('gulp');
    gulp.task('do-something', function() {
                //console.log(arguments); console.log('I did something');
    });
    */

    var gulp = require('gulp');

    gulp.task('sass', function() {

      var sass = require('gulp-sass');
      gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css/'));
    })

    gulp.task('build', ['sass'], function() {
      gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
      gulp.src([
          'src/*.html', '!src/scss', 'src/css/*.css'
        ])
        .pipe(gulp.dest('dist/'));
    });