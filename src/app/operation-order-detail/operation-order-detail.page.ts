import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { OperationOrderCancelPage } from '../../modals/operation-order-cancel/operation-order-cancel.page';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { OperationConfirmCancelOrderPage } from '../../modals/operation-confirm-cancel-order/operation-confirm-cancel-order.page';

@Component({
  selector: 'app-operation-order-detail',
  templateUrl: './operation-order-detail.page.html',
  styleUrls: ['./operation-order-detail.page.scss'],
})
export class OperationOrderDetailPage implements OnInit {
  public haveEmployee: boolean;
  public _id: string;
  public orderdetail$ = Promise.resolve([]);
  title: string;

  constructor(public alertCtr: AlertController, private modalController: ModalController, private navCtrl: NavController, private activatedRoute: ActivatedRoute, private adminSvc: AdminService) {
    this.haveEmployee = false
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
  }

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
    this.orderdetail$ = this.adminSvc.getOrderDetail(this._id);
    this.orderdetail$.then((it: any) => {
      this.title = it?.orderDetail?.orderCode;
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

  ngOnInit() {
  }

  async goOrderCancelModal() {
    const modal = await this.modalController.create({
      component: OperationOrderCancelPage,
      // cssClass: 'dialog-modal-4-order-addcancel',
      componentProps: { '_id': this._id },
      backdropDismiss: false
    });
    modal.onDidDismiss().then(async data => {
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
      if (data.data != null) {
        this.orderdetail$ = this.adminSvc.getOrderDetail(data.data);
        this.orderdetail$.then((it: any) => {
        }, async error => {
          alert.message = error.error.message;
          await alert.present();
        });
      }
    })
    modal.present();
  }

  async goConfirmCancelOrder(_id: string) {
    const modal = await this.modalController.create({
      component: OperationConfirmCancelOrderPage,
      cssClass: 'dialog-modal-4-order-addcancel',
      componentProps: { 'cancelRequestId': _id },
      backdropDismiss: false
    });
    modal.onDidDismiss().then(data => {
      if (data.data) {
        this.navCtrl.back();
      }
    })
    modal.present();
  }

  async goDenyCancelOrder(_id: string) {
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
    if (_id) {
      this.adminSvc.updateSendCancelDeny(_id).then((it: any) => {
        this.navCtrl.back();
      }, async error => {
        alert.message = error.error.message;
        await alert.present();
      });
    }
  }
}
