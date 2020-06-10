import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { async } from '@angular/core/testing';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-biker-detail',
  templateUrl: './biker-detail.page.html',
  styleUrls: ['./biker-detail.page.scss'],
})
export class BikerDetailPage implements OnInit {

  bikerId: string;
  bikerInfo$: Promise<any>;
  title: string;

  constructor(private activedRoute: ActivatedRoute, private adminSvc: AdminService, private alertCtr: AlertController, private navCtrl: NavController) {
    this.bikerId = this.activedRoute.snapshot.paramMap.get('bikerId');
  }

  ngOnInit() {
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

    this.bikerInfo$ = this.adminSvc.getBikerById(this.bikerId);
    this.bikerInfo$.then((it: any) => {
      this.title = it.name;
      console.log(it);
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

  async Suspended() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.loadData();
        },
      }],
      backdropDismiss: false
    });

    this.adminSvc.updateSuspendBiker(this.bikerId).then(() => {
      this.loadData();
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

  async UnSuspended() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.loadData();
        },
      }],
      backdropDismiss: false
    });

    this.adminSvc.updateUnsuspendBiker(this.bikerId).then(() => {
      this.loadData();
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }
}
