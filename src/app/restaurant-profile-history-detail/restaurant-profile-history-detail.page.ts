import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-profile-history-detail',
  templateUrl: './restaurant-profile-history-detail.page.html',
  styleUrls: ['./restaurant-profile-history-detail.page.scss'],
})
export class RestaurantProfileHistoryDetailPage implements OnInit {

  public orderId: string;
  title: string;
  public orderDetail$ = Promise.resolve([]);

  constructor(private activatedRoute: ActivatedRoute, private adminSvc: AdminService, private alertCtr: AlertController, private navCtrl: NavController) {
    this.orderId = this.activatedRoute.snapshot.paramMap.get('orderId');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getOrderDetail();
  }

  async getOrderDetail() {
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

    this.orderDetail$ = this.adminSvc.getOrderDetail(this.orderId);
    this.orderDetail$.then((it: any) => {
      this.title = it.orderDetail.orderCode;

    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }
}
