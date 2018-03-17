'use strict';
var add        = require('gulp-add');
var gulp       = require('gulp');
var sass       = require('gulp-sass');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var watcher    = gulp.watch('js/**/*.js', ['uglify','reload']);

gulp.task('css', function(){
  return gulp.src('./app/css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/assets/css'))
});

gulp.task('js', function(){
  return gulp.src(
  		[
  			'./node_modules/vue/dist/vue.js',
  			'./node_modules/vue-router/dist/vue-router.js',
  			'./node_modules/vue-resource/dist/vue-resource.js',
        './node_modules/vue2-google-maps/dist/vue2-google-maps.js',
  			'./app/js/Components/*.js',
  			'./app/js/*.js'
  		]
  	)
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/assets/js'))
});

gulp.task('default', [ 'css', 'js']);
