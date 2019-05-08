import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

preLoaderFinished();
if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));

function preLoaderFinished() {
    const preLoader = document.querySelector('body');
    if (!preLoader) {
        return;
    }
    setTimeout(() => {
        const image = './assets/image/bg.png';
        preLoader.style.backgroundImage = 'url(' + image + ')';
        preLoader.style.backgroundSize = 'cover';
        // preLoader.setAttribute('background', './assets/image/bg.png');
    }, 100);
}
