import {Component} from '@angular/core'

@Component({
    templateUrl: './app/space/welcome/welcome.html',
    selector: 'welcomeComponent'
})
export class WelcomeComponent {
    constructor() { }


    public editing = false;
    public content = { title: 'zxcvzxcvzxc', description: 'asdfsadf' };

    showEdit() {
        this.editing = true;
    }

    hideEdit() {
        this.editing = false;
    }
}