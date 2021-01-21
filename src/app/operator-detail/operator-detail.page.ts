import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { AlertController, NavController } from '@ionic/angular';
import { log } from 'console';

@Component({
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.page.html',
  styleUrls: ['./operator-detail.page.scss'],
})
export class OperatorDetailPage implements OnInit {

  adminDetail$ = Promise.resolve([]);
  title: string;
  public id: string;
  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute, private adminSvc: AdminService, private alertCtrl: AlertController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('_id');
  }


  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const alert = await this.alertCtrl.create({
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

    this.adminDetail$ = this.adminSvc.getAdminById(this.id);
    this.adminDetail$.then((it: any) => {
      this.title = it.name;
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }
}
