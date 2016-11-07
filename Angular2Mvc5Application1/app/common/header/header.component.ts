import {Component, ViewChild} from '@angular/core'
import {AddSpaceModal} from '../../space/addspace/add.space'


@Component({
    selector: 'header-component',
    templateUrl: './app/common/header/header.html',
    directives: [AddSpaceModal]
})
export class HeaderComponent {
    @ViewChild(AddSpaceModal)
    public modal: AddSpaceModal;
    
    showModal() {
        debugger;
        this.modal.modalVisible = true;
    }
    hideModal() {
        this.modal.modalVisible = false;
    }
}