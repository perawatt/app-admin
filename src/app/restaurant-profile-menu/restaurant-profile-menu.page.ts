import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestaurantCreateQrPage } from '../restaurant-create-qr/restaurant-create-qr.page';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-profile-menu',
  templateUrl: './restaurant-profile-menu.page.html',
  styleUrls: ['./restaurant-profile-menu.page.scss'],
})
export class RestaurantProfileMenuPage implements OnInit {
  data$ = Promise.resolve([]);
  segmentValue: any;
  _id: string;
  public category: any;

  constructor(private route: ActivatedRoute, private admindSvc: AdminService, public modalController: ModalController) { }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('shopId');
  }

  ionViewDidEnter() {
    this.data$ = this.admindSvc.getRestaurantMenu(this._id);
    this.data$.then(it => {
      console.log(it);
      let qry = it.filter(i => i.products.length > 0);
      this.category = qry[0].categoryId;
      this.segmentChanged(qry[0].categoryId);
    })
  }

  segmentChanged(id: any) {
    this.segmentValue = id;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: RestaurantCreateQrPage
    });
    return await modal.present();
  }
}
