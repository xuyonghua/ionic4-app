import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-class',
    templateUrl: './class.page.html',
    styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {

    hasAddClass = false;
    code = null;
    classList //= ['课程1', '课程2'];

    constructor(private toast: ToastController) {
        if (this.classList !== null) {
            this.hasAddClass = true;
        }
    }

    ngOnInit() {
    }

    async clickAddClass() {
        if (this.code === null) {
            const toast = await this.toast.create({
                message: '请输入课程码',
                position: 'middle',
                duration: 2,
                cssClass: 'custom_toast',
            });
            toast.present();
        } else {
            const toast = await this.toast.create({
                message: '课程码不存在',
                position: 'middle',
                duration: 2,
                cssClass: 'custom_toast',
            });
            toast.present();
        }
    }

    changeClass(i) {

    }
}
