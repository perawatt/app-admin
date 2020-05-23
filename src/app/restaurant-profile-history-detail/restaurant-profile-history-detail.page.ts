import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-restaurant-profile-history-detail',
  templateUrl: './restaurant-profile-history-detail.page.html',
  styleUrls: ['./restaurant-profile-history-detail.page.scss'],
})
export class RestaurantProfileHistoryDetailPage implements OnInit {
  public haveEmployee: boolean;
  public orderId: string;
  public orderDetail$ = Promise.resolve([]);

  constructor(private route: ActivatedRoute, private adminSvc: AdminService) {
    this.haveEmployee = false
  }

  ngOnInit() {
    this.route.params.subscribe(param => { this.orderId = param["orderId"] });
    console.log(this.orderId);
    this.getOrderDetail()
  }

  getOrderDetail() {
    this.orderDetail$ = this.adminSvc.getOrderDetail(this.orderId);
    this.orderDetail$.then(it => {
      console.log(it);
    })
  }
}
