import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { AlertController } from '@ionic/angular';
import { AdminInfo } from 'src/providers/adminInfo/admin-info.service';

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
  private hubConnection: HubConnection;

  constructor(public alertController: AlertController, private adminSvc: AdminService) { }

  ngOnInit() {
    this.adminSvc.getAdminInfo();
    this.messageTable = "attention";

    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://delivery-3rd-api.azurewebsites.net/signalR")
      .build();

    this.hubConnection.start().then(() => {
      console.log("hub start");
      this.Login();
    })

    this.hubConnection.on("UpdateOrderStatus", (param: any) => {
      if (param.status == "CancelRequest") {
        console.log("order has cancel");
        this.cancelRequestOrderinfo$ = this.adminSvc.getCancelRequest();
      }
    });
  }

  Login() {
    this.hubConnection.invoke("Login", AdminInfo.adminId).then(() => {
      console.log("login success");
    });
  }

  ionViewDidEnter() {
    this.cancelRequestOrderinfo$ = this.adminSvc.getCancelRequest();
    this.unFinishedOrderinfo$ = this.adminSvc.getUnfinishedOrder();
    this.setStatus();
  }

  setStatus() {
    this.unFinishedOrderinfo$.then((it: any) => {
      console.log(it);

      it.forEach(i => {
        console.log(i?.acceptRequestDate);
        console.log(i?.createDate);
        console.log(i?.shippingDate);
        console.log(i?.destinationDate);
        console.log(i?.doneDate);

        if (
          i?.acceptRequestDate &&
          i?.createDate &&
          i?.shippingDate &&
          i?.destinationDate &&
          i?.doneDate) {
          this.status = "doneDate";
          console.log('1');

        } else if (
          i?.acceptRequestDate &&
          i?.createDate &&
          i?.shippingDate &&
          i?.destinationDate) {
          this.status = "destinationDate";
          console.log('2');

        } else if (
          i?.acceptRequestDate &&
          i?.createDate &&
          i?.shippingDate) {
          this.status = "shippingDate";
          console.log('3');

        } else if (
          i?.acceptRequestDate &&
          i?.createDate) {
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
