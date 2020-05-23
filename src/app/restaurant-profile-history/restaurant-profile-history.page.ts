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

  constructor(private route: ActivatedRoute, private adminSvc: AdminService) { }

  ngOnInit() {
    this.route.params.subscribe(param => { this._idShop = param["_idShop"] });
    console.log(this._idShop);
    this.getRestaurantOrderHistory()
  }

  getRestaurantOrderHistory() {
    this.shopHistory$ = this.adminSvc.getRestaurantOrderHistory(this._idShop);
    this.shopHistory$.then(it => {
      console.log(it);
    })
  }

}
