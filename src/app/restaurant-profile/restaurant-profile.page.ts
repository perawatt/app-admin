import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.page.html',
  styleUrls: ['./restaurant-profile.page.scss'],
})
export class RestaurantProfilePage implements OnInit {

  public _idShop: string;
  public shopName: string;
  public shopInfo$ = Promise.resolve([]);

  constructor(private activatedRoute: ActivatedRoute, private adminSvc: AdminService,private alertCtr: AlertController) {
  }

  ngOnInit() {
    this._idShop = this.activatedRoute.snapshot.paramMap.get('shopId');
    this.shopName = this.activatedRoute.snapshot.paramMap.get('shopName');
    console.log(this._idShop);
    this.getRestaurantById();
  }

  ionViewWillEnter() {
    
  }

  getRestaurantById() {
    this.shopInfo$ = this.adminSvc.getRestaurantById(this._idShop);
    this.shopInfo$.then(it => {
      console.log(it);
    }, async error => {
      const alert = await this.alertCtr.create({
        header: 'เกิดข้อผิดพลาด',
        message: error.error.message,
        buttons: [{
          text: 'ตกลง',
          handler: () => {
            // DO SOMETHING
          },
        }],
        backdropDismiss: false
      });

      await alert.present();
    });
  }
}
