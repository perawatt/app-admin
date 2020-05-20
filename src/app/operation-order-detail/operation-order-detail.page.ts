import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OperationOrderCancelPage } from '../operation-order-cancel/operation-order-cancel.page';

@Component({
  selector: 'app-operation-order-detail',
  templateUrl: './operation-order-detail.page.html',
  styleUrls: ['./operation-order-detail.page.scss'],
})
export class OperationOrderDetailPage implements OnInit {
  public haveEmployee: boolean;

  constructor(private modalController: ModalController) {
    this.haveEmployee = false
   }

  ngOnInit() {
  }

  async zzz() {
    const modal = await this.modalController.create({
      component: OperationOrderCancelPage,
      cssClass: 'dialog-modal-4-order-addcancel',
      backdropDismiss: false
    });
    modal.onDidDismiss().then(data => {
    })
    modal.present();
  }

}
