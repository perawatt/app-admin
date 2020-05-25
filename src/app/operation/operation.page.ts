import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss'],
})
export class OperationPage implements OnInit {
  unFinishedOrderinfo$ = Promise.resolve([]);
  cancelRequestOrderinfo$ = Promise.resolve([]);

  messageTable: string;
  attention: string = 'attention';
  order: string = 'order';
  public status: string;

  constructor(private adminSvc: AdminService) { }

  ngOnInit() {
    this.adminSvc.getAdminInfo();
    this.messageTable = "attention";
  }

  ionViewDidEnter() {
    this.cancelRequestOrderinfo$ = this.adminSvc.getCancelRequest();
    this.unFinishedOrderinfo$ = this.adminSvc.getUnfinishedOrder();
    this.setStatus();
    this.unFinishedOrderinfo$.then((it: any) => {
      console.log(it);
    });
  }

  setStatus() {
    this.cancelRequestOrderinfo$.then((it: any) => {
      console.log(it);

      it.forEach(i => {
        console.log(i.acceptRequestDate);
        console.log(i.createDate);
        console.log(i.shippingDate);
        console.log(i.destinationDate);
        console.log(i.doneDate);

        if (
          i.acceptRequestDate &&
          i.createDate &&
          i.shippingDate &&
          i.destinationDate &&
          i.doneDate) {
          this.status = "doneDate";
          console.log('1');

        } else if (
          i.acceptRequestDate &&
          i.createDate &&
          i.shippingDate &&
          i.destinationDate) {
          this.status = "destinationDate";
          console.log('2');

        } else if (
          i.acceptRequestDate &&
          i.createDate &&
          i.shippingDate) {
          this.status = "shippingDate";
          console.log('3');

        } else if (
          i.acceptRequestDate &&
          i.createDate) {
          this.status = "acceptRequestDate";
          console.log('4');

        } else {
          this.status = "createDate";
          console.log('5');
        }
      });
    });
  }
}
