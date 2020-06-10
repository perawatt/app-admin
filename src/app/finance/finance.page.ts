import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
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

  constructor(private alertCtr: AlertController, private navCtrl: NavController, private modalController: ModalController, private adminSvc: AdminService, public router: Router) { }

  ionViewWillEnter() {
    this.loadData()
  }

  async loadData() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
        },
      }],
      backdropDismiss: false
    });

    this.financeInfo$ = this.adminSvc.getFinance();
    this.financeInfo$.then((it: any) => {
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
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
