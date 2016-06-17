var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	svgSprite = require('gulp-svg-sprite');

var src_sass = 'app/sass/**/main.scss',
	src_jade = 'app/jade/*.jade',
	dest_sass = 'app/css',
	dest_jade = './';

 
gulp.task('sass', function(){ 
	return gulp.src(src_sass) 
		.pipe(sass()) 
		.pipe(gulp.dest(dest_sass))		
});

gulp.task('jade', function(){
	return gulp.src(src_jade)
		.pipe(jade({pretty:true}))
		.pipe(gulp.dest(dest_jade))
});

gulp.task('svgSprite', function(){
	var config = {
		      mode: {
		        symbol: {
		          dest: './',     //base directory
		          sprite: 'sprite_social',
		          pretty: 'true',          //Sprite location
		          render: {
		            	scss: {
		              	dest: 'sprite_social', //CSS stylesheet location
				            }
				          }
				        }
				      }
				    };
	return gulp.src('app/icons/**/*.svg')
    .pipe(svgSprite( config ))
    .pipe(gulp.dest('app/icons/sprites'));
});

gulp.task('watch', function(){
	gulp.watch(src_jade, ['jade']);
	gulp.watch(src_sass, ['sass']);
});

// gulp.task('default', ['watch']);


