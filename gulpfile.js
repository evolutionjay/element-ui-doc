var gulp = require("gulp");
var postcss = require("gulp-postcss");
// const syntax = require('postcss-less');
// var less = require('postcss-less-engine');
var less = require("gulp-less");
var autoprefixer = require("autoprefixer");
// var cssnext = require("cssnext");

//定义css任务
gulp.task("css", function() {
  //定义postcss任务流数组
  var processors = [
    autoprefixer({
      browsers: ["last 20 version"],
      cascade: false,
      remove: false
    })
    // ,
    // cssnext()
  ];
  return gulp
    .src("./src/css/*.less")
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(gulp.dest("./dist"));
});

gulp.task("watchcss", function() {
  gulp.watch("./src/css/*.less", ["css"]);
});
