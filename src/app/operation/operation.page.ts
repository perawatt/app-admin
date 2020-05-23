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

  constructor(private adminSvc: AdminService) { }

  ngOnInit() {
    this.adminSvc.getAdminInfo();
    this.messageTable = "attention";
  }

  ionViewDidEnter() {
      this.cancelRequestOrderinfo$ = this.adminSvc.getCancelRequest();
      this.cancelRequestOrderinfo$.then((it: any) => {
        console.log(it);
      });
      
      this.unFinishedOrderinfo$ = this.adminSvc.getUnfinishedOrder();
      this.unFinishedOrderinfo$.then((it: any) => {
        console.log(it);
      });
    }
}
