var gulp = require('gulp');
var runSequence = require('run-sequence');
var bundleGulp = require('../util/bundleGulp');

gulp.task('build', function(callback) {
  return runSequence('clean', 'bower', ['slim', 'scripts', 'ionic', 'img'], 'scss', callback);
});
