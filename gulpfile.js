// var gulp = require('gulp'),
// 	jade = require('gulp-jade'),
// 	sass = require('gulp-sass');
// 	// browserSync = require('browser-sync').create(),
// 	// svgSprite = require('gulp-svg-sprite');

// var src_sass = 'app/sass/**/*.scss',
// 	src_jade = 'app/jade/*.jade',
// 	dest_sass = 'dist/css',
// 	dest_jade = 'dist',
// 	// reload = browserSync.reload,
// 	watch_html = 'dist/*.html',
// 	js = 'app/js/*.js';

 
// gulp.task('sass', function(){ 
// 	return gulp.src(src_sass) 
// 		.pipe(sass()) 
// 		.pipe(gulp.dest(dest_sass))
// 		// .pipe(reload({stream:true}))		
// });

// gulp.task('jade', function(){
// 	return gulp.src(src_jade)
// 		.pipe(jade({pretty:true}))
// 		.pipe(gulp.dest(dest_jade))
// 		// .pipe(reload({stream:true}))
// });

// gulp.task('html', function(){
//   gulp.src(watch.html)
//   // .pipe(reload({stream:true}));
// });

// gulp.task('js', function(){
//   gulp.src(js)
//   // .pipe(reload({stream:true}));
// });

// gulp.task('browser-sync', function(){
// 	browserSync({ 
// 		server: {
// 		baseDir: 'dist' 
// 				},
// 		notify: false 
// 	});
// });

// gulp.task('svgSprite', function(){
// 	var config = {
// 		      mode: {
// 		        symbol: {
// 		          dest: './',     //base directory
// 		          sprite: 'sprite_social',
// 		          pretty: 'true',          //Sprite location
// 		          render: {
// 		            	scss: {
// 		              	dest: 'sprite_social', //CSS stylesheet location
// 				            }
// 				          }
// 				        }
// 				      }
// 				    };
// 	return gulp.src('app/icons/**/*.svg')
//     .pipe(svgSprite( config ))
//     .pipe(gulp.dest('app/icons/sprites'));
// });

// gulp.task('watch',['jade', 'sass', 'html','js'], function(){
// 	gulp.watch(src_jade, gulp.series('jade'));
// 	gulp.watch(src_sass, gulp.series('sass'));
// 	gulp.watch(watch_html, gulp.series('html'));
// 	gulp.watch(js, gulp.series('js'));

// 	// gulp.watch(src_jade, gulp.series('jade'), reload);
// 	// gulp.watch(src_sass, gulp.series('sass'), reload);
// 	// gulp.watch(watch_html, gulp.series('html'), reload);
// 	// gulp.watch(js, gulp.series('js'), reload);
// });



// gulp.task('default', gulp.series(
// 	gulp.parallel(
// 		'sass',
// 		'jade',
// 		'html',
// 		'js'
// 	),

// 	gulp.parallel(
// 		'watch'
// 		// 'browserSync'
// 	)
// ));

var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	svgSprite = require('gulp-svg-sprite'),
	browserSync = require('browser-sync').create();

var src_sass = 'app/sass/**/*.scss',
	src_jade = 'app/jade/*.jade',
	src_js = 'app/js/*.js',
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

gulp.task('js', function(){
  	return gulp.src(src_js)

  // .pipe(reload({stream:true}));
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

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function(){
	gulp.watch(src_jade, ['jade']).on('change', browserSync.reload);
	gulp.watch(src_sass, ['sass']).on('change', browserSync.reload);
	gulp.watch(src_js, ['js']).on('change', browserSync.reload);
	gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default',['watch', 'browser-sync' ]);

// gulp.task('default', gulp.series(
// 	gulp.parallel(
// 		'sass',
// 		'jade',
// 		'js'

// 	),

// 	gulp.parallel(
// 		'watch',
// 		'browser-sync'

// 	)
// ));


