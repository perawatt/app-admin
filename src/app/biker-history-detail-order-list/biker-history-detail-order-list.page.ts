import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biker-history-detail-order-list',
  templateUrl: './biker-history-detail-order-list.page.html',
  styleUrls: ['./biker-history-detail-order-list.page.scss'],
})
export class BikerHistoryDetailOrderListPage implements OnInit {

  orderId:string;
  productList$:Promise<any>;
  title:string;

  constructor(private adminSvc:AdminService,private activedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.orderId = this.activedRoute.snapshot.paramMap.get('orderId');
    this.productList$ = this.adminSvc.getOrderDetail(this.orderId);
    this.productList$.then((it:any)=>{
      console.log(it);
      this.title = it.orderDetail._id;
    });
    
  }


}
