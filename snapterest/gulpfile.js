var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    babel = require('gulp-babel');


gulp.task('default',function () {
    return browserify('./sources/app.js')
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('snapterest.js'))
        .pipe(gulp.dest('./build/'));
});
