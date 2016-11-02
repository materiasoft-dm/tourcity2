import { Component } from '@angular/core';
import { SpaceComponent } from './space/space.component'


@Component({
    selector: 'my-app',
    templateUrl: './app/main.html',
    directives: [SpaceComponent]
})
export class AppComponent {
}
