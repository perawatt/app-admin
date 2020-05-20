import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-attention-list',
  templateUrl: './operation-attention-list.page.html',
  styleUrls: ['./operation-attention-list.page.scss'],
})
export class OperationAttentionListPage implements OnInit {
  public haveEmployee: boolean;

  constructor() { 
    this.haveEmployee = false
  }

  ngOnInit() {
  }

}
