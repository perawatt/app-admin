import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-operation-attention-detail',
  templateUrl: './operation-attention-detail.page.html',
  styleUrls: ['./operation-attention-detail.page.scss'],
})
export class OperationAttentionDetailPage implements OnInit {
  title:string;
  public orderId: string;
  productList$ = Promise.resolve([]);



  constructor(private activatedRoute: ActivatedRoute, private adminSvc: AdminService) { }

  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.paramMap.get('orderId');
    console.log(this.orderId);

    this.productList$ = this.adminSvc.getOrderDetail(this.orderId);
    this.productList$.then((it: any) => {
     this.title = it.orderDetail._id;
    });
    


  }

}
