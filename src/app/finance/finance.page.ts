import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FinanceConfirmPage } from '../finance-confirm/finance-confirm.page';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async zzz() {
    const modal = await this.modalController.create({
      component: FinanceConfirmPage,
      cssClass: 'dialog-modal-4-order-success',
      backdropDismiss: false
    });
    modal.onDidDismiss().then(data => {
    })
    modal.present();
  }

}
