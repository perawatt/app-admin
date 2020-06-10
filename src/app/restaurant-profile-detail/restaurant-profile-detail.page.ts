import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { RestaurantCreateQrPage } from '../restaurant-create-qr/restaurant-create-qr.page';

@Component({
  selector: 'app-restaurant-profile-detail',
  templateUrl: './restaurant-profile-detail.page.html',
  styleUrls: ['./restaurant-profile-detail.page.scss'],
})
export class RestaurantProfileDetailPage implements OnInit {

  public data$ = Promise.resolve([]);
  public segmentValue: any;
  public _id: string;
  public category: any;
  constructor(private route: ActivatedRoute, private alertCtr: AlertController, private adminSvc: AdminService) {
    this._id = this.route.snapshot.paramMap.get('shopId');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getRestaurantMenuById();
  }

  async getRestaurantMenuById() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          // DO SOMETHING
        },
      }],
      backdropDismiss: false
    });

    this.data$ = this.adminSvc.getRestaurantMenuById(this._id);
    this.data$.then(it => {
      console.log(it);
      let qry = it.filter(i => i.products.length > 0);
      this.category = qry[0].categoryId;
      this.segmentChanged(qry[0].categoryId);
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

  segmentChanged(id: any) {
    this.segmentValue = id;
  }

}
