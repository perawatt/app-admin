import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
})
export class ContractPage implements OnInit {

  contactInfo$ = Promise.resolve([]);
  constructor(private navCtrl: NavController, private alertCtr: AlertController, private adminSvc: AdminService) { }

  ionViewWillEnter() {
    this.loadData();
  }

  async loadData() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.navCtrl.back();
        },
      }],
      backdropDismiss: false
    });

    this.contactInfo$ = this.adminSvc.getContractCondition();
    this.contactInfo$.then((it: any) => {
    }, async error => {
      alert.message = error.error.message;

      await alert.present();
    });
  }

  ngOnInit() {
  }

}
