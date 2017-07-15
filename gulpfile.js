'use strict';

var del = require('del');
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('css', function(cb) {
    return del('css/*', cb);
});

gulp.task('less', ['css'], function() {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('image', function() {
    return gulp.src('less/image/*')
        .pipe(gulp.dest('css/image'));
});

gulp.task('default', ['less', 'image']);
