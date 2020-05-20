import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-confirm-cancel-order',
  templateUrl: './operation-confirm-cancel-order.page.html',
  styleUrls: ['./operation-confirm-cancel-order.page.scss'],
})
export class OperationConfirmCancelOrderPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
