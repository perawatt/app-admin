import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-biker-history-detail',
  templateUrl: './biker-history-detail.page.html',
  styleUrls: ['./biker-history-detail.page.scss'],
})
export class BikerHistoryDetailPage implements OnInit {
  public haveEmployee: boolean;
  public haveCancel: boolean;

  orderId:string;
  orderInfo$:Promise<any>;
  title:string;
  constructor(private activedRoute:ActivatedRoute,private adminSvc:AdminService) { 
    this.haveEmployee = false
  }

  ngOnInit() {
    this.orderId = this.activedRoute.snapshot.paramMap.get('orderId');
    this.orderInfo$ = this.adminSvc.getOrderDetail(this.orderId);
    this.orderInfo$.then((it)=>{
        this.title = it?.orderDetail?._id;
        console.log(it);
    });
    
  }

}
