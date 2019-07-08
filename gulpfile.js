const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
    // 1.где мой scss файл
    return gulp.src('app/scss/**/*.scss')
    // 2. пропускаем файл через sass компайлер
    .pipe(sass().on('error', sass.logError))
    // 3. куда сохраняем
    .pipe(gulp.dest('app/css'))
    // 4. на все браузеры
    .pipe(browserSync.stream())
};

function watch() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
    gulp.watch('app/scss/**/*.scss', style);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;