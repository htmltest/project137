var html = document.documentElement;

var fontsfile = document.createElement('link');
fontsfile.href = pathTemplate + 'css/fonts.css';
fontsfile.rel = 'stylesheet';
document.head.appendChild(fontsfile);

if (sessionStorage.fontsLoaded) {
    html.classList.add('fonts-loaded');
} else {
    var script = document.createElement('script');
    script.src = pathTemplate + 'js/fontfaceobserver.js';
    script.async = true;

    script.onload = function () {
        var OpenSans400 = new FontFaceObserver('OpenSans', {
            weight: 'normal'
        });
        var OpenSans600 = new FontFaceObserver('OpenSans', {
            weight: '600'
        });
        var OpenSans700 = new FontFaceObserver('OpenSans', {
            weight: '700'
        });
        var OpenSans800 = new FontFaceObserver('OpenSans', {
            weight: '800'
        });

        Promise.all([
            OpenSans400.load(),
            OpenSans600.load(),
            OpenSans700.load(),
            OpenSans800.load()
        ]).then(function () {
            html.classList.add('fonts-loaded');
            sessionStorage.fontsLoaded = true;
        });
    };
    document.head.appendChild(script);
}