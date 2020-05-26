import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { OperationOrderCancelPage } from '../operation-order-cancel/operation-order-cancel.page';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { OperationConfirmCancelOrderPage } from '../operation-confirm-cancel-order/operation-confirm-cancel-order.page';

@Component({
  selector: 'app-operation-order-detail',
  templateUrl: './operation-order-detail.page.html',
  styleUrls: ['./operation-order-detail.page.scss'],
})
export class OperationOrderDetailPage implements OnInit {
  public haveEmployee: boolean;
  public _id: string;
  orderdetail$ = Promise.resolve([]);
  title:string;

  constructor(private modalController: ModalController, private navCtrl: NavController, private activatedRoute: ActivatedRoute, private adminSvc: AdminService) {
    this.haveEmployee = false
  }

  ionViewDidEnter() {
  }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
    console.log(this._id);
    this.orderdetail$ = this.adminSvc.getOrderDetail(this._id);
    this.orderdetail$.then((it: any) => {
      console.log(it);
      this.title = it?.orderDetail?._id;
    });
  }

  async goOrderCancelModal() {
    const modal = await this.modalController.create({
      component: OperationOrderCancelPage,
      // cssClass: 'dialog-modal-4-order-addcancel',
      componentProps: { '_id': this._id },
      backdropDismiss: false
    });
    modal.onDidDismiss().then(data => {
      console.log( data.data);
      console.log('uuuuu' , data.data);   
      if(data.data != null)
      this.orderdetail$ = this.adminSvc.getOrderDetail(data.data);
      this.orderdetail$.then((it: any) => {
        console.log(it);
      });
    })
    modal.present();
  }

  async goConfirmCancelOrder(cancelRequestId: string) {
    const modal = await this.modalController.create({
      component: OperationConfirmCancelOrderPage,
      // cssClass: 'dialog-modal-4-order-addcancel',
      componentProps: { 'cancelRequestId': cancelRequestId },
      backdropDismiss: false
    });
    modal.onDidDismiss().then(data => {
      this.navCtrl.back();

    })
    modal.present();
  }

  goDenyCancelOrder(cancelRequestId: string){
    console.log(cancelRequestId);
    if(cancelRequestId){
      this.adminSvc.updateSendCancelDeny(cancelRequestId).then((it: any) => {
        console.log(it);
        this.navCtrl.back();
      })
    }
  }

}
