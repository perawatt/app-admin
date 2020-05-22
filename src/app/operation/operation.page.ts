import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss'],
})
export class OperationPage implements OnInit {

  messageTable: string;
  attention: string = 'attention';
  order: string = 'order';
  constructor(private adminSvc: AdminService) { }

  ngOnInit() {
    this.adminSvc.getAdminInfo();
    this.messageTable = "attention";
  }

}
