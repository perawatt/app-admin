import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-order-detail',
  templateUrl: './operation-order-detail.page.html',
  styleUrls: ['./operation-order-detail.page.scss'],
})
export class OperationOrderDetailPage implements OnInit {
  public haveEmployee: boolean;

  constructor() {
    this.haveEmployee = false
   }

  ngOnInit() {
  }

}
