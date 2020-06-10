import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-restaurant-profile-history',
  templateUrl: './restaurant-profile-history.page.html',
  styleUrls: ['./restaurant-profile-history.page.scss'],
})
export class RestaurantProfileHistoryPage implements OnInit {

  public _idShop: string;
  public shopHistory$ = Promise.resolve([]);

  constructor(private activatedRoute: ActivatedRoute, private adminSvc: AdminService) {
    this._idShop = this.activatedRoute.snapshot.paramMap.get('shopId')
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.shopHistory$ = this.adminSvc.getRestaurantOrderHistory(this._idShop);
    this.shopHistory$.then(it => {
      console.log(it);
    })
  }

}
