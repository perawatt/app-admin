import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-biker-history-detail-order-list',
  templateUrl: './biker-history-detail-order-list.page.html',
  styleUrls: ['./biker-history-detail-order-list.page.scss'],
})
export class BikerHistoryDetailOrderListPage implements OnInit {

  orderId: string;
  productList$: Promise<any>;
  title: string;

  constructor(private navCtrl:NavController,private adminSvc: AdminService, private activedRoute: ActivatedRoute,private alertCtr:AlertController) {
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

    this.productList$ = this.adminSvc.getOrderDetail(this.orderId);
    this.productList$.then((it: any) => {
      
      this.title = it.orderDetail?.orderCode;
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

}
