var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    plumber = require('gulp-plumber');

var browserSync = require('browser-sync');

gulp.task('default', ['uglify', 'watch']);

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  })
});



gulp.task('uglify', function() {
    gulp.src('app/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.reload({
          stream: true
        }));
});


gulp.task('watch', ['browserSync', 'uglify'],function() {
    gulp.watch('app/**/*.js', ['uglify']);
});

