var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var config = {
	path: {
		scss: './src/scss/**/*.scss',
		html: './public/index.html'
	},
	output: {
		cssName: 'bundle.min.css',
		path: './public'
	}
}

function onError(err) {
	console.log(err);
}

gulp.task('scss', function() {
	return gulp.src(config.path.scss)
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(concat(config.output.cssName))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		// cascade: false
}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(config.output.path));
});

gulp.task('default', ['scss']);