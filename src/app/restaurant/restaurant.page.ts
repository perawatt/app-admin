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

  ionViewWillEnter() {
    this.getRestaurant$ = this.adminSvc.getRestaurant();
  }

  ngOnInit() {
  }

}
