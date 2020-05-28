import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FinanceConfirmPage } from '../../modals/finance-confirm/finance-confirm.page';
import { AdminService } from 'src/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {
  financeInfo$ = Promise.resolve([]);

  constructor(private modalController: ModalController, private adminSvc : AdminService, public router: Router) { }

  ionViewDidEnter() {
    this.financeInfo$ = this.adminSvc.getFinance();
    this.financeInfo$.then((it:any)=>{
      console.log(it);
    });
  }

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
