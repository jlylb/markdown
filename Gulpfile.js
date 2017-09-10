var gulp=require('gulp');
var markdown=require('gulp-markdown');
var copy=require('gulp-copy');
var tmp = require('./ltc');


var dist='./dist/';

var src=['./mdoc/*'];

gulp.task('default',function(){

    return gulp.src(src)
                .pipe(markdown())
                .pipe(tmp())
                .pipe(gulp.dest(dist));

});


gulp.task('bs',function(){
    return gulp.src(['./node_modules/bootstrap/dist/**/*'])
                .pipe(gulp.dest(dist+'lib/bootstrap/'));
});

gulp.task('jquery',function(){
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js','./toc.js'])
                .pipe(gulp.dest(dist+'lib/js/'));
});

gulp.task('css',function(){
    return gulp.src(['./*.css'])
                .pipe(gulp.dest(dist+'lib/css/'));
});
