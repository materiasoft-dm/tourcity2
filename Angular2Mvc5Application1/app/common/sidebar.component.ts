import {Component} from '@angular/core'
import {SidebarService} from './sidebar.service'

@Component({
    selector: 'sidebar',
    template: `<div>{{title}}</div>
    <ul>
<li *ngFor="#item of sidebarItems">
{{item}}
</li>
</ul>`,
    providers: [SidebarService]
})
export class SidebarComponent {
    title = "This is a sidebar";
    sidebarItems;

    constructor(sidebarService: SidebarService) {
        this.sidebarItems = sidebarService.getSidebarItems();
    }
}