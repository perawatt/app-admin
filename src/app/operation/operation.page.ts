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

  public unFinishedOrderinfo$ = Promise.resolve([]);
  public cancelRequestOrderinfo$ = Promise.resolve([]);
  public messageTable: string;
  public attention: string = 'attention';
  public order: string = 'order';
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

  ionViewWillEnter() {
    this.cancelRequestOrderinfo$ = this.adminSvc.getCancelRequest();
    this.cancelRequestOrderinfo$.then((it) => {
      it.sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime())
    });
    this.unFinishedOrderinfo$ = this.adminSvc.getUnfinishedOrder();
  }

  refreshOrder() {
    if (this.messageTable == "order") {
      this.unFinishedOrderinfo$ = this.adminSvc.getUnfinishedOrder();
      this.unFinishedOrderinfo$.then((it: any) => {
        it.sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
      });
    }
  }

}
