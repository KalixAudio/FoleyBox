'use strict';

var gulp = require('gulp');
var path = require('path');
var child = require('child_process');
var liveReload = require('gulp-livereload');
var less = require('gulp-less');
 var notify = require('gulp-notify');
var bower = require('gulp-bower');

var config = {
  html: {
    input: 'src/**/*.html'
  },
  less: {
    imports: [
    ],
    entryPoint: 'src/less/main.less',
    input: 'src/less/**/*.less',
    output: 'src/css'
  }
};

gulp.task('html', function () { 
  return gulp
    .src(config.html.input)
    .pipe(liveReload());
});

gulp.task('less', function () { 
  return gulp
    .src(config.less.entryPoint)
    .pipe(less({paths: config.less.imports}))
    .pipe(gulp.dest(config.less.output))
    .pipe(liveReload());
});

gulp.task('watch', function () { 
  liveReload.listen();
  gulp.watch(config.less.input, ['less']);
  gulp.watch(config.html.input, ['html']);
});

gulp.task('run', function () { 
  var electronPath = path.join(__dirname, 'node_modules', 'electron-prebuilt', 'dist', 'Electron.app', 'Contents', 'MacOS', 'Electron');
  child.spawn(electronPath, [__dirname]);
});

gulp.task('default', ['less', 'html', 'watch', 'run']);
