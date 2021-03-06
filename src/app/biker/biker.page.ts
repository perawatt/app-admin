import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-biker',
  templateUrl: './biker.page.html',
  styleUrls: ['./biker.page.scss'],
})
export class BikerPage implements OnInit {

  bikerListInfo$: Promise<any>;

  constructor(private adminSvc: AdminService) { }

  ionViewWillEnter() {
    this.bikerListInfo$ = this.adminSvc.getBiker();   
  }
  
  ngOnInit() {}


}
