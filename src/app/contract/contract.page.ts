import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
})
export class ContractPage implements OnInit {

  contactInfo$ = Promise.resolve([]);
  constructor(private alertCtr: AlertController, private adminSvc: AdminService) { }

  ionViewDidEnter() {
    this.loadData();
  }

  async loadData() {
    this.contactInfo$ = this.adminSvc.getContractCondition();
    this.contactInfo$.then((it: any) => {
    }, async error => {
      const alert = await this.alertCtr.create({
        header: 'เกิดข้อผิดพลาด',
        message: error.error.message,
        buttons: [{
          text: 'ตกลง',
          handler: () => {
            // DO SOMETHING
          },
        }],
        backdropDismiss: false
      });

      await alert.present();
    });
  }

  ngOnInit() {
  }

}
