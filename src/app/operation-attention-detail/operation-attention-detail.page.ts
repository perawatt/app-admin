import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-operation-attention-detail',
  templateUrl: './operation-attention-detail.page.html',
  styleUrls: ['./operation-attention-detail.page.scss'],
})
export class OperationAttentionDetailPage implements OnInit {
  public _id: string;
  productList$ = Promise.resolve([]);



  constructor(private activatedRoute: ActivatedRoute, private adminSvc: AdminService) { }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
    console.log(this._id);

    this.productList$ = this.adminSvc.getOrderDetail(this._id);
    this.productList$.then((it: any) => {
      console.log(it);
    });


  }

}
