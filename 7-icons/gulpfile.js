var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var cheerio = require('gulp-cheerio');
var svgmin = require('gulp-svgmin');
var rename = require("gulp-rename");

gulp.task('svgstore', function() {
  return gulp
    .src('icons/*.svg')
    .pipe(svgmin())
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(cheerio(function ($) {
      $('svg').attr('width', '0');
      $('svg').attr('height', '0');
      $('svg').attr('display', 'none');
    }))
    .pipe(rename('svg-sprite.svg'))
    .pipe(gulp.dest(''))
});