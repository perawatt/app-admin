import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-operation-confirm-cancel-order',
  templateUrl: './operation-confirm-cancel-order.page.html',
  styleUrls: ['./operation-confirm-cancel-order.page.scss'],
})
export class OperationConfirmCancelOrderPage implements OnInit {
  @Input() cancelRequestId: string;
  public fg: FormGroup;
  public refundAll: boolean = false;

  constructor(private modalController: ModalController,public modalCtrl: ModalController, private fb: FormBuilder,  private adminSvc: AdminService) {
    this.fg = this.fb.group({
      'heading': null,
      'info': null,
      'refundAll': false,
      'refundFood': false,
      'compensate': false,
    })
  }

  ngOnInit() {
    console.log(this.cancelRequestId);
  }

  handleSubmit() {
    console.log('heading', this.fg.get('heading').value);
    console.log('heading2', this.fg.get('info').value);
    console.log('heading2', this.fg.get('refundAll').value);
    console.log('heading2', this.fg.get('refundFood').value);
    console.log('heading2', this.fg.get('compensate').value);


    console.log(this.fg.value);
    console.log(this.cancelRequestId);
    if (this.cancelRequestId)
    this.adminSvc.updateSendCancelComfirm(this.cancelRequestId, this.fg.value).then((it: any) => {
      this.modalController.dismiss();
      })
  }

  close() {
    this.modalCtrl.dismiss();
  }

  isChangeRefundAll() {
    this.refundAll = !this.refundAll;
  }


}
