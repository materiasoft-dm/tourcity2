import {Component} from '@angular/core'
import {SpaceService} from './../space.service'
import { FormsModule } from '@angular/forms';
import {Space} from './../space.model';

@Component({
    templateUrl: './app/space/welcome/welcome.html',
    selector: 'welcomeComponent',
    providers: [SpaceService, FormsModule]
})
export class WelcomeComponent {
    constructor(private spaceService : SpaceService) {
        this.getSpace();    
    }

    
    public editing = false;
    public content: Space = { Id: 0, Name: '', IsActive: true, Title:'', Description:''};
    public error: string;
    showEdit() {
        this.editing = true;
    }

    hideEdit() {
        this.editing = false;
    }

    saveWelcome() {
        this.spaceService.updateSpace(this.content)
            .subscribe(space => this.content = space, error => <any>error);
        this.hideEdit();
    }

    getSpace() {
        this.spaceService.getSpace(1)
            .subscribe(space => this.content = space,error => <any>error);
         
    }
}