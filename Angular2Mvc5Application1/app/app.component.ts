import { Component } from '@angular/core';
import { SidebarComponent } from './common/sidebar.component'
import { SpaceComponent } from './space/space.component'


@Component({
    selector: 'my-app',
    templateUrl: './app/main.html',
    directives: [SidebarComponent, SpaceComponent]
})
export class AppComponent {
}
