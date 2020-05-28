import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OperationConfirmCancelOrderPage } from '../../modals/operation-confirm-cancel-order/operation-confirm-cancel-order.page';

@Component({
  selector: 'app-operation-attention-list',
  templateUrl: './operation-attention-list.page.html',
  styleUrls: ['./operation-attention-list.page.scss'],
})
export class OperationAttentionListPage implements OnInit {
  public haveEmployee: boolean;

  constructor(private modalController: ModalController) { 
    this.haveEmployee = false
  }

  ngOnInit() {
  }

  async zzz() {
    const modal = await this.modalController.create({
      component: OperationConfirmCancelOrderPage,
      cssClass: 'dialog-modal-4-order-cancels',
      backdropDismiss: false
    });
    modal.onDidDismiss().then(data => {
    })
    modal.present();
  }

}
