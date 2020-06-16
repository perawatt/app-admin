import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-edit-category',
  templateUrl: './restaurant-edit-category.page.html',
  styleUrls: ['./restaurant-edit-category.page.scss'],
})
export class RestaurantEditCategoryPage implements OnInit {

  public data$ = Promise.resolve([]);
  public _id: string;
  constructor(private route: ActivatedRoute, private adminSvc: AdminService, private navCtrl: NavController, private alertCtr: AlertController) {
    this._id = this.route.snapshot.paramMap.get('shopId');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getCategoryList();
  }

  async getCategoryList() {
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
    
    this.data$ = this.adminSvc.getCategoryList(this._id);
    this.data$.then(it => {
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }
}
