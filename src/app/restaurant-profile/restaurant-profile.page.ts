import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.page.html',
  styleUrls: ['./restaurant-profile.page.scss'],
})
export class RestaurantProfilePage implements OnInit {

  public _idShop: string;
  title: string;
  public shopInfo$ = Promise.resolve([]);

  constructor(private activatedRoute: ActivatedRoute, private adminSvc: AdminService, private alertCtr: AlertController, private navCtrl: NavController) {
    this._idShop = this.activatedRoute.snapshot.paramMap.get('shopId');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getRestaurantById();
  }

  async getRestaurantById() {
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
    
    this.shopInfo$ = this.adminSvc.getRestaurantById(this._idShop);
    this.shopInfo$.then((it: any) => {
      this.title = it.restaurant.name    
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }
}
