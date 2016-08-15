var mustache = require('gulp-mustache');

module.exports = function (gulp, plugins, config) {
    return function () {
        config.projects.map(function(element, index, array){
            gulp.src(config.basepath.src + element + "/examples/*.html")
            .pipe(mustache())
            .pipe(gulp.dest(config.basepath.build + "/" + element + "/examples/"));
        })
    };
};
