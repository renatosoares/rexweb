var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var files = ['src/public_html/_assets/themes/mobilenew/scss/*.scss', 'src/public_html/_assets/themes/mobilenew/js/*.js', 'src/public_html/_assets/themes/default/scss/*.scss'];

var input = 'src/public_html/_assets/themes/default/scss/custom.scss';
var output = 'src/public_html/_assets/themes/default/css/';

var inputMobile = 'src/public_html/_assets/themes/mobilenew/scss/build.scss';
var outputMobile = 'src/public_html/_assets/themes/mobilenew/buildcss';

var jsFiles = 'src/public_html/_assets/themes/mobilenew/js/*.js',
    jsDest = 'src/public_html/_assets/themes/mobilenew/buildjs';

gulp.task('customscss', function () {
    return gulp
        .src(input)
        .pipe(sass().on('error', sass.logError))
        .pipe(minify({keepBreaks: false}))
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest(output));
});

gulp.task('buildcss', function () {
    return gulp
        .src(inputMobile)
        .pipe(sass().on('error', sass.logError))
        .pipe(minify({keepBreaks: false}))
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest(outputMobile));
});


gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('build.min.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('build.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

//Watch task
gulp.task('default',function() {
    gulp.watch(files,['buildcss', 'customscss', 'scripts']);
});