import {Directive, ElementRef} from '@angular/core';
import {Events} from '@ionic/angular';

@Directive({
    selector: '[appBg]'
})
export class BgDirective {

    constructor(el: ElementRef, public event: Events) {
        // this.event.subscribe('updateBg', (image) => {
        //     el.nativeElement.style.backgroundImage = 'url(' + image + ')';
        // });
        const image = '../../assets/image/bg.png';
        el.nativeElement.style.backgroundImage = 'url(' + image + ')';
    }
}
