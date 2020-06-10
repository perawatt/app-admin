import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-finance-create',
  templateUrl: './finance-create.page.html',
  styleUrls: ['./finance-create.page.scss'],
})
export class FinanceCreatePage implements OnInit {
  public fg: FormGroup;

  constructor(private alertCtr: AlertController, private adminSvc: AdminService, private fb: FormBuilder, private router: Router, private navCtrl: NavController) {
    this.fg = this.fb.group({
      'destinationId': [null, Validators.required],
      "amount": [null, Validators.required],
      'note': null,
    })
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
        },
      }],
      backdropDismiss: false
    });

    this.adminSvc.createFinance(this.fg.value).then((it: any) => {
      this.navCtrl.back();
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    })
  }



  cancel() {
    this.navCtrl.back();
  }
}
