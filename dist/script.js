const {
   src: src,
   dest: dest,
   watch: watch,
   series: series
} = require("gulp"), sass = require("gulp-sass"), postcss = require("gulp-postcss"), cssnano = require("cssnano"), terser = require("gulp-terser"), browsersync = require("browser-sync").create();

function scssTask() {
   return src("app/scss/style.scss", {
      sourcemaps: !0
   }).pipe(sass()).pipe(postcss([cssnano()])).pipe(dest("dist", {
      sourcemaps: "."
   }))
}

function jsTask() {
   return src("app/js/script.js", {
      sourcemaps: !0
   }).pipe(terser()).pipe(dest("dist", {
      sourcemaps: "."
   }))
}

function browsersyncServe(s) {
   browsersync.init({
      server: {
         baseDir: "."
      }
   }), s()
}

function browsersyncReload(s) {
   browsersync.reload(), s()
}

function watchTask() {
   watch("*.html", browsersyncReload), watch(["app/**/*.scss", "app/**/*.js"], series(scssTask, jsTask, browsersyncReload))
}
exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);
const testString = "This is a test!";
console.log(testString);
const fruits = ["mango", "papaya", "lychee"];
fruits.map((s => {
   console.log(s)
}));
//# sourceMappingURL=script.js.map