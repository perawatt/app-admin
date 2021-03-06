import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biker-balance',
  templateUrl: './biker-balance.page.html',
  styleUrls: ['./biker-balance.page.scss'],
})
export class BikerBalancePage implements OnInit {

  bikerFinanceList$:Promise<any>;
  bikerId:string;
  constructor(private adminSvc:AdminService,private activedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.bikerId = this.activedRoute.snapshot.paramMap.get('bikerId');
    this.bikerFinanceList$ = this.adminSvc.getBikerFinance(this.bikerId);
  }

}
