var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var files = ['assets/scss/*.scss', 'assets/js/*.js'];

var inputStyles = 'assets/scss/build.scss';
var outputStyles = 'assets/dist';

var jsFiles = 'assets/js/*.js',
    jsDest = 'assets/dist';


gulp.task('buildcss', function () {
    return gulp
        .src(inputStyles)
        .pipe(sass().on('error', sass.logError))
        .pipe(minify({keepBreaks: false}))
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest(outputStyles));
});


gulp.task('scripts', function() {
    // return gulp.src(jsFiles)
    return gulp
        .src(jsFiles)
        .pipe(concat('build.min.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('build.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

//Watch task
gulp.task('default',function() {
    gulp.watch(files,['buildcss', 'scripts']);
});