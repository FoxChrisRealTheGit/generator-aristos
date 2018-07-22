const gulp = require("gulp");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const nodemon = require("gulp-nodemon");

gulp.task("watch", ["scripts", "styles", "nodemon"], () => {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    port: 3001
  });
  watch("./content/theme/views/**/*.ejs", () => {
    browserSync.reload();
  });

  watch("./content/public/css/**/*.css", () => {
    gulp.start("cssInject");
  });

  watch("./content/public/scripts/**/*.js", () => {
    gulp.start("scriptsRefresh");
  });
  
  /* watch admin */
  watch("./important/admin/views/**/*.ejs", () => {
    browserSync.reload();
  });
  watch("./content/public/scripts/**/*.js", () => {
    gulp.start("scriptsRefresh");
  });
  watch("./important/admin/admincss/**/*.css", () => {
    gulp.start("adminCssInject");
  });

}); /* end of watch task */

gulp.task("nodemon", function(cb) {
  var started = false;

  return nodemon({
    script: "index.js"
  }).on("start", function() {
    /* to avoid nodemon being started multiple times */
    /* thanks @matthisk */
    if (!started) {
      cb();
      started = true;
    }
  });
}); /* end of nodemon task */

gulp.task("cssInject", ["styles"], () => {
  return gulp
    .src("./content/temp/styles/theme.css")
    .pipe(browserSync.stream());
}); /* end of css inject task */

gulp.task("scriptsRefresh", ["scripts"], () => {
  browserSync.reload();
}); /* end of scripts refresh task */

gulp.task("adminCssInject", ["adminStyles"], () => {
    return gulp
      .src("./important/temp/styles/main.css")
      .pipe(browserSync.stream());
  }); /* end of css inject task */