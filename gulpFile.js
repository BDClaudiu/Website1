const gulp=require('gulp');
const imagemin=require('gulp-imagemin');
const uglify=require('gulp-uglify');
const sass=require('gulp-sass');
const concat=require('gulp-concat');

/*
--TOP LEVEL FUNCTUIONS --
gulp.task      - Define tasks
gulp.src       - Point tofiles to use
gulp.dest      - Points to folder to output
gulp.watch     - Watch files and folders for changes

*/


//Default task
//Minify removed from the array since we are doing it to the main.js
gulp.task('default', ['message','copyHtml','imgMin','scripts','sass']);


//Logs message
gulp.task('message',function(){
    return console.log ('Gulp is running...');
});

//Copy all html files
gulp.task('copyHtml',function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

//Optimize Images
gulp.task('imgMin', () =>
{
        gulp.src('src/images/bestsellers/*')
		.pipe(imagemin())
        .pipe(gulp.dest('dist/images/bestsellers'));
      
        gulp.src('src/images/newarrivels/*')
		.pipe(imagemin())
        .pipe(gulp.dest('dist/images/newarrivels'));
        
        gulp.src('src/images/shopmensshorts/*')
		.pipe(imagemin())
        .pipe(gulp.dest('dist/images/shopmensshorts'));
        
        gulp.src('src/images/shopsale/*')
		.pipe(imagemin())
        .pipe(gulp.dest('dist/images/shopsale'));

        gulp.src('src/images/shopsets/*')
		.pipe(imagemin())
        .pipe(gulp.dest('dist/images/shopsets'));
        
        gulp.src('src/images/shoptops/*')
		.pipe(imagemin())
        .pipe(gulp.dest('dist/images/shoptops'));

        gulp.src('src/images/shopwomensshorts/*')
		.pipe(imagemin())
        .pipe(gulp.dest('dist/images/shopwomensshorts'));
        
        gulp.src('src/images/topdiv/*')
		.pipe(imagemin())
        .pipe(gulp.dest('dist/images/topdiv'));

        gulp.src('src/images/urbanplanet/*')
		.pipe(imagemin())
        .pipe(gulp.dest('dist/images/urbanplanet'));
            
});

//Minify JS
gulp.task('minify',function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

//Compile SASS
gulp.task('sass',function(){
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/css'));
});

//Concat Js files
gulp.task('scripts',function(){
    gulp.src('src/js/*js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function(){
    gulp.watch('src/js/*.js',['scripts']);
    gulp.watch('src/images/*',['imgMin']);
    gulp.watch('src/sass/*.scss',['sass']);
    gulp.watch('src/*.html',['copyHtml']);
});
