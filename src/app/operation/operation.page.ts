import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss'],
})
export class OperationPage implements OnInit {

  messageTable: string;
  attention: string = 'attention';
  order: string = 'order';
  constructor() { }

  ngOnInit() {
    this.messageTable = "attention";
  }

}
