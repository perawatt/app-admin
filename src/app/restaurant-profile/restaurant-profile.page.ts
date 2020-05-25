import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.page.html',
  styleUrls: ['./restaurant-profile.page.scss'],
})
export class RestaurantProfilePage implements OnInit {

  public _idShop: string;
  public shopName: string;
  public shopInfo$ = Promise.resolve([]);

  constructor(private activatedRoute: ActivatedRoute, private adminSvc: AdminService) {
  }

  ngOnInit() {
    this._idShop = this.activatedRoute.snapshot.paramMap.get('shopId');
    this.shopName = this.activatedRoute.snapshot.paramMap.get('shopName');
    console.log(this._idShop);
    this.getRestaurantById();
  }

  getRestaurantById() {
    this.shopInfo$ = this.adminSvc.getRestaurantById(this._idShop);
    this.shopInfo$.then(it => {
      console.log(it);

    })
  }
}
