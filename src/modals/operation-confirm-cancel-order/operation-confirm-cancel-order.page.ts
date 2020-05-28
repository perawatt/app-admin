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
  public heading: any;
  public info: any;
  public refundAll: any;
  public refundFood: any;
  public noRefund: any;
  public compensate: boolean;
  public isOk: boolean = true;

  constructor(private modalController: ModalController, public modalCtrl: ModalController, private fb: FormBuilder, private adminSvc: AdminService) {
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
    this.fg.get('heading').setValue(this.heading);
    this.fg.get('info').setValue(this.info);
    this.fg.get('refundAll').setValue(this.refundAll);
    this.fg.get('refundFood').setValue(this.refundFood);
    this.fg.get('compensate').setValue(this.compensate);

    console.log('heading', this.fg.get('heading').value);
    console.log('info', this.fg.get('info').value);
    console.log('refundAll', this.fg.get('refundAll').value);
    console.log('refundFood', this.fg.get('refundFood').value);
    console.log('compensate', this.fg.get('compensate').value);
    console.log(this.fg.value);
    console.log(this.cancelRequestId);
    if (this.cancelRequestId && this.fg.get('heading').value && this.fg.get('info').value && (this.fg.get('refundAll').value 
    || this.fg.get('refundFood').value || this.fg.get('compensate').value || this.noRefund))
      this.adminSvc.updateSendCancelComfirm(this.cancelRequestId, this.fg.value).then((it: any) => {
        this.modalController.dismiss(this.isOk);
      })
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
