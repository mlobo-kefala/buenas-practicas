var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    open = require('gulp-open'),
    karma = require('karma');

gulp.task('default', function() {
    return gulp.src(['app/main.js', 'app/App/*.js'])
        .pipe(jshint())
        .pipe(uglify())
        .pipe(jshint.reporter(stylish))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('coverage', ['unit:coverage'], function() {
    return gulp.src('test/coverage/index.html')
        .pipe(open());
});
gulp.task('unit:coverage', function(done) {

    return new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        action: 'run',
        singleRun: true,
        preprocessors: {
            'app/main.js': ['coverage'],
            'app/**/*.js': ['coverage']
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'test/coverage/',
            subdir: '.'
        }
    }, done).on('error', function(err) {
        throw err;
    }).start();

});
