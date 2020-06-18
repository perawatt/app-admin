import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { collectExternalReferences } from '@angular/compiler';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-operation-attention-detail',
  templateUrl: './operation-attention-detail.page.html',
  styleUrls: ['./operation-attention-detail.page.scss'],
})
export class OperationAttentionDetailPage implements OnInit {
  title: string;
  public orderId: string;
  productList$ = Promise.resolve([]);



  constructor(private activatedRoute: ActivatedRoute, private adminSvc: AdminService, public alertController: AlertController) {
    this.orderId = this.activatedRoute.snapshot.paramMap.get('orderId');

   }

  ionViewWillEnter() {
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const alert = await this.alertController.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          // this.navCtrl.back();
        },
      }],
      backdropDismiss: false
    });
    this.productList$ = this.adminSvc.getOrderDetail(this.orderId);
    this.productList$.then((it: any) => {
      this.title = it.orderDetail.orderCode;
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });

  }
}
