const { watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const clean = require('gulp-clean-css');

gulp.task('sass', function()
{
	return gulp.src('scss/global.scss')
	.pipe(sass())
	.pipe(clean({compatibility : 'ie11'}))
	.pipe(gulp.dest('style'))
});

gulp.task('watch', function()
{
	gulp.watch('scss/*.scss', gulp.series('sass'));
});