import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.page.html',
  styleUrls: ['./contract-create.page.scss'],
})
export class ContractCreatePage implements OnInit {
  public fg: FormGroup;

  constructor(private alertCtr: AlertController, private navCtrl: NavController, private fb: FormBuilder, private adminSvc: AdminService, private route: Router) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'commissionPercent': [null, Validators.required],
      'deliveryPricePerOrder': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  handleSubmit() {
    if (this.fg.valid) {
      this.loadData();
    }
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

    this.adminSvc.createContractCondition(this.fg.value).then((it: any) => {
      this.navCtrl.back();
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

  Back() {
    this.navCtrl.back();
  }
}
