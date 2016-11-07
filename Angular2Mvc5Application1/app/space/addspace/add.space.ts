import {Component} from '@angular/core'

@Component({
    selector: 'addspacemodal',
    templateUrl: './app/space/addspace/addspacemodal.html'
})
export class AddSpaceModal {
    public modalVisible: boolean = false;
    public showModal() {
        this.modalVisible = true;
    }
    public hideModal() {
        this.modalVisible = false;
    }
}