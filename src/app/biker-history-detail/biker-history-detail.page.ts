import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-biker-history-detail',
  templateUrl: './biker-history-detail.page.html',
  styleUrls: ['./biker-history-detail.page.scss'],
})
export class BikerHistoryDetailPage implements OnInit {
  public haveEmployee: boolean;
  public haveCancel: boolean;

  orderId: string;
  orderInfo$: Promise<any>;
  title: string;
  constructor(private navCtrl:NavController,private alertCtr:AlertController,private activedRoute: ActivatedRoute, private adminSvc: AdminService) {
    this.haveEmployee = false
    this.orderId = this.activedRoute.snapshot.paramMap.get('orderId');
  }

  ngOnInit() {
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

    this.orderInfo$ = this.adminSvc.getOrderDetail(this.orderId);
    this.orderInfo$.then((it) => {
      this.title = it?.orderDetail?._id;
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });

  }

}
