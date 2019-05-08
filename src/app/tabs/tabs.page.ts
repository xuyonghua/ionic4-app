import {Component} from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    selectTab = 'tab1';

    tabChange(e) {
        this.selectTab = e.tab;
    }
}
