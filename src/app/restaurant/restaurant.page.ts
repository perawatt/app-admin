import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  public getRestaurant$ = Promise.resolve([]);


  constructor(private adminSvc: AdminService) { }

  ionViewDidEnter() {
    this.getRestaurant$ = this.adminSvc.getRestaurant();
    this.getRestaurant$.then(it => {
      console.log(it);
    })
  }

  ngOnInit() {
  }

}
