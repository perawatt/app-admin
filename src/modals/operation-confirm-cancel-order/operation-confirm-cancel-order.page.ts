import { ModalController, AlertController, NavController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-operation-confirm-cancel-order',
  templateUrl: './operation-confirm-cancel-order.page.html',
  styleUrls: ['./operation-confirm-cancel-order.page.scss'],
})
export class OperationConfirmCancelOrderPage implements OnInit {
  @Input() cancelRequestId: string;
  public fg: FormGroup;
  public heading: any;
  public info: any;
  public refundAll: any;
  public refundFood: any;
  public noRefund: any;
  public compensate: boolean;
  public isOk: boolean = true;

  constructor(public modalCtrl: ModalController, public alertController: AlertController, private fb: FormBuilder, private adminSvc: AdminService) {
    this.fg = this.fb.group({
      'heading': [null, Validators.required],
      'info': null,
      'refundAll': false,
      'refundFood': false,
      'compensate': false,
    })
  }

  ngOnInit() {
  }

  async handleSubmit() {
    this.fg.get('refundAll').setValue(this.refundAll);
    this.fg.get('refundFood').setValue(this.refundFood);
    this.fg.get('compensate').setValue(this.compensate);
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
    if (this.fg.valid)
    console.log(this.fg.valid);
      this.adminSvc.updateSendCancelComfirm(this.cancelRequestId, this.fg.value).then((it: any) => {
        this.modalCtrl.dismiss(this.isOk);
      }, async error => {
        alert.message = error.error.message;
        await alert.present();
      });
  }

  close() {
    this.modalCtrl.dismiss();
  }

  selected() {
    this.refundAll = false;
    this.refundFood = false;
    this.noRefund = false;
    this.compensate = false;
  }
}
