/**
 * Created by User on 19.02.2017.
 */
const  gulp = require('gulp');
const  less = require('gulp-less');

gulp.task('default',()=>{
    console.log("default task");
});

gulp.task('less',()=> {
    return gulp.src('./assets/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/css'));
});
gulp.task('less:watch',()=>{
   gulp.watch('./assets/less/**/*.less',['less']);
});