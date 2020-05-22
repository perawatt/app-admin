import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FinanceConfirmPage } from '../finance-confirm/finance-confirm.page';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {
  financeInfo$ = Promise.resolve([]);

  constructor(private modalController: ModalController, private adminSvc : AdminService) { }

  ngOnInit() {
    this.financeInfo$ = this.adminSvc.getFinance();
    this.financeInfo$.then((it:any)=>{
      console.log(it);
    });


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
