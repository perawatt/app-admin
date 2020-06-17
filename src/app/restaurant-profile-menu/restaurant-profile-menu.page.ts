import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { RestaurantCreateQrPage } from '../restaurant-create-qr/restaurant-create-qr.page';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-profile-menu',
  templateUrl: './restaurant-profile-menu.page.html',
  styleUrls: ['./restaurant-profile-menu.page.scss'],
})
export class RestaurantProfileMenuPage implements OnInit {
  public data$ = Promise.resolve([]);
  public segmentValue: any;
  public _id: string;
  public category: any;

  constructor(private route: ActivatedRoute, private adminSvc: AdminService, private alertCtr: AlertController, public modalController: ModalController, private navCtrl: NavController) {
    this._id = this.route.snapshot.paramMap.get('shopId');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getRestaurantMenu();
  }

  async getRestaurantMenu() {
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

    this.data$ = this.adminSvc.getRestaurantMenu(this._id);
    this.data$.then(it => {
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

  async deleteMenu(productId: string) {
    const alertError = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
        },
      }],
      backdropDismiss: false
    });

    const alertConfirm = await this.alertCtr.create({
      header: 'ยืนยันการลบ',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.adminSvc.deleteProduct(this._id, productId).then((it: any) => {
            this.getRestaurantMenu();
          }, async error => {
            alertError.message = error.error.message;
            await alertError.present();
          });
        },
      },
      {
        text: 'ยกเลิก',
        handler: () => {
        },
      }],
      backdropDismiss: false
    });

    await alertConfirm.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: RestaurantCreateQrPage,
      backdropDismiss: false,
    });
    return await modal.present();
  }
}
