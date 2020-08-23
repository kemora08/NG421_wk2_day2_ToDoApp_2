import { Component, OnInit } from '@angular/core';
import {NgbModalRef} from '@ng-boostrap/ng-boostrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  modalInstance: NgbModalRef;
  constructor() { }

  ngOnInit() {

  }

  close(): void {
    this.modalInstance.dismiss();
  }

  yes(): void {
    this.modalInstance.close('yes');
  }



}
