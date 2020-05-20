import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-profile-history-detail',
  templateUrl: './restaurant-profile-history-detail.page.html',
  styleUrls: ['./restaurant-profile-history-detail.page.scss'],
})
export class RestaurantProfileHistoryDetailPage implements OnInit {
  public haveEmployee: boolean;

  constructor() {
    this.haveEmployee = false
  }

  ngOnInit() {
  }

}
