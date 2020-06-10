import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-operation-order-cancel',
  templateUrl: './operation-order-cancel.page.html',
  styleUrls: ['./operation-order-cancel.page.scss'],
})
export class OperationOrderCancelPage implements OnInit {
  public fg: FormGroup;
  @Input() _id: string;

  constructor(private modalCtrl: ModalController, public alertController: AlertController, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private adminSvc: AdminService) {
    this.fg = this.fb.group({
      'heading': [null, Validators.required],
      'info': null,
    })
  }

  ngOnInit() {
  }

  async handleSubmit() {
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
      this.adminSvc.createSendCancelRequest(this._id, this.fg.value).then((it: any) => {
        this.modalCtrl.dismiss(this._id);
      }, async error => {
        alert.message = error.error.message;
        await alert.present();
      });
  }

  cancalModal() {
    this.modalCtrl.dismiss();
  }


}
