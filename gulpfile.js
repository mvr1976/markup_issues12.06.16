var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass');
 
gulp.task('sass', function(){ 
	return gulp.src('app/sass/**/*.scss') 
		.pipe(sass()) 
		.pipe(gulp.dest('app/css')) 
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('jade', function(){
	return gulp.src('app/jade/**/*.jade')
		.pipe(jade({pretty:true}))
		.pipe(gulp.dest('./'));
});