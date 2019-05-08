import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {WechatPage} from './wechat.page';
import {DirectivesModule} from '../directives/directives.module';

const routes: Routes = [
    {
        path: '',
        component: WechatPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DirectivesModule,
        RouterModule.forChild(routes)
    ],
    declarations: [WechatPage]
})
export class WechatPageModule {
}
