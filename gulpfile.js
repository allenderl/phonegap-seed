var gulp = require('gulp');
var slim = require("gulp-slim");
var rimraf = require('rimraf');

gulp.task('slim', ['slim-main', 'slim-partials']);

gulp.task('slim-main', function() {
  gulp.src("./src/slim/*.slim")
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest("./www/"));
});

gulp.task('slim-partials', function() {
  gulp.src("./src/slim/partials/*.slim")
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest("./www/partials/"));
});

gulp.task('clean', function(cb) {
  rimraf('./www', cb);
});

gulp.task('default', function() {
  // place code for your default task here
});
