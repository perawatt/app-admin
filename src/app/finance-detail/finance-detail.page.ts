import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-finance-detail',
  templateUrl: './finance-detail.page.html',
  styleUrls: ['./finance-detail.page.scss'],
})
export class FinanceDetailPage implements OnInit {
  financeDetail$ = Promise.resolve([]);
  public _id: string;
  title: string;
  constructor(private alertCtrl: AlertController, private activatedRoute: ActivatedRoute, private navCtrl: NavController, private adminSvc: AdminService, private router: Router) {
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const alert = await this.alertCtrl.create({
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

    this.financeDetail$ = this.adminSvc.getFinanceById(this._id);
    this.financeDetail$.then((it: any) => {
      this.title = it?.destinationName;
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

  async deleteFinanceDetail() {
    const alert = await this.alertCtrl.create({
      header: 'ยืนยันการลบ',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            this.adminSvc.deleteFinance(this._id).then((it: any) => {
              this.navCtrl.back();
            });
          }
        }
      ]
    });
    await alert.present();
  }
}
