const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      del = require('del'),
      browserSync = require('browser-sync');


    gulp.task('clean', async function(){
        del.sync('dist')
    });



    gulp.task('scss', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

    gulp.task('html', function () {
        return gulp.src('app/*.html')
            .pipe(browserSync.reload({stream: true}))
    });

    gulp.task('css', function () {
        return gulp.src([
            'node_modules/normalize.css/normalize.css',
            'node_modules/slick-carousel/slick/slick.scss'
        ])
            .pipe(concat('libs.scss'))
            .pipe(gulp.dest('app/scss'))
            .pipe(browserSync.reload({stream: true}))
    });


    gulp.task('script', function () {
        return gulp.src('app/js/*.js')
            .pipe(browserSync.reload({stream: true}))
    });

    gulp.task('js', function () {
        return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/slick-carousel/slick/slick.js'
        ])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('app/js'))
            .pipe(browserSync.reload({stream: true}))
    });

    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "app/"
            }
        });
    });


    gulp.task('export', async function () {
        let buildHtml = gulp.src('app/**/*.html')
            .pipe(gulp.dest('dist'));

        let buildCss = gulp.src('app/css/**/*.css')
            .pipe(gulp.dest('dist/css'));

        let buildJs = gulp.src('app/js/**/*.js')
            .pipe(gulp.dest('dist/js'));

        let buildFonts = gulp.src('app/fonts/**/*.*')
            .pipe(gulp.dest('dist/fonts'));

        let buildImg = gulp.src('app/img/**/*.*')
            .pipe(gulp.dest('dist/img'));

    });



gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('script'));
});






gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));
gulp.task('build', gulp.series('export', 'clean'));