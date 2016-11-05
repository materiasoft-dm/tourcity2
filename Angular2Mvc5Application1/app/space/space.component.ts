import {Component} from '@angular/core'
import {HeaderComponent} from './../common/header/header.component'
import {WelcomeComponent} from './welcome/welcome.component'
import {AddSpaceModal} from './addspace/add.space'
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'space-section',
    directives: [HeaderComponent, WelcomeComponent, AddSpaceModal],
    providers:[FormsModule],
    templateUrl: './app/space/space.html'
})
export class SpaceComponent {
    public modalVisible: boolean = false;
    showModal() {
        this.modalVisible = true;
    }
    hideModal() {
        this.modalVisible = false;
    }
}