let mix = require('laravel-mix');

require('laravel-mix-imagemin');

mix
    .sass('build/css/screen.scss', 'html/assets/css/style.css')
    .copyDirectory('build/fonts', 'html/assets/fonts')
    .js('build/js/app.js', 'html/assets/js/app.js')
    .imagemin({
        from: 'img/**/*'
    }, {
        context: 'build'
    })
    .setPublicPath('html/assets');

if (mix.inProduction()) {
    mix.version();
} else {
    mix.disableNotifications();
}
