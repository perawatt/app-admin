import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biker-history-detail',
  templateUrl: './biker-history-detail.page.html',
  styleUrls: ['./biker-history-detail.page.scss'],
})
export class BikerHistoryDetailPage implements OnInit {
  public haveEmployee: boolean;
  public haveCancel: boolean;

  constructor() { 
    this.haveEmployee = false
  }

  ngOnInit() {
  }

}
