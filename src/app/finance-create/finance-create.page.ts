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
  biker$ = Promise.resolve([]);
  alert: any;
  constructor(private alertCtr: AlertController, private adminSvc: AdminService, private fb: FormBuilder, private router: Router, private navCtrl: NavController) {
    this.fg = this.fb.group({
      'destinationId': [null, Validators.required],
      "amount": [null, Validators.required],
      'note': null,
    })
  }

  ngOnInit() {
    this.loadBikerId();
  }

  async loadBikerId() {
    this.alert = await this.alertCtr.create({
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
    this.biker$ = this.adminSvc.getBiker();
    this.biker$.then((it: any) => {
    }, async error => {
      this.alert.message = error.error.message;
      await this.alert.present();
    })
  }

  handleSubmit() {
    if (this.fg.valid) {
      this.loadData();
    }
  }

  async loadData() {
    this.adminSvc.createFinance(this.fg.value).then((it: any) => {
      this.navCtrl.back();
    }, async error => {
      this.alert.message = error.error.message;
      await this.alert.present();
    })
  }

  cancel() {
    this.navCtrl.back();
  }
}
