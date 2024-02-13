// Importando os módulos do Gulp
const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar SASS
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss') // Caminho dos arquivos SASS
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Compilar SASS e comprimir o resultado
        .pipe(gulp.dest('dist/css')); // Pasta de destino para os arquivos CSS compilados
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function() {
    return gulp.src('/Users/pedroperes/Desktop/images/images') // Caminho das imagens
        .pipe(imagemin()) // Comprimir as imagens
        .pipe(gulp.dest('/Users/pedroperes/Desktop/images/comprimidas')); // Pasta de destino para as imagens comprimidas
});

// Tarefa para comprimir JavaScript
gulp.task('uglify', function() {
    return gulp.src('src/js/**/*.js') // Caminho dos arquivos JavaScript
        .pipe(uglify()) // Comprimir JavaScript
        .pipe(gulp.dest('dist/js')); // Pasta de destino para os arquivos JavaScript comprimidos
});

// Tarefa padrão que executa todas as tarefas
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));
