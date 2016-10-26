import { Component } from '@angular/core';
import { SidebarComponent } from './common/sidebar.component'


@Component({
    selector: 'my-app',
    template: `
                <div>Main</div>
<sidebar></sidebar>
              `,
    directives: [SidebarComponent]
})
export class AppComponent {
}
