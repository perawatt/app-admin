import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-biker-history',
  templateUrl: './biker-history.page.html',
  styleUrls: ['./biker-history.page.scss'],
})
export class BikerHistoryPage implements OnInit {

  bikerId:string;
  bikerHistory$:Promise<any>;
  constructor(private activedRoute:ActivatedRoute,private adminSvc:AdminService) { }

  ngOnInit() {
     this.bikerId = this.activedRoute.snapshot.paramMap.get('bikerId');
     console.log('biker id : '+this.bikerId);
      this.bikerHistory$ = this.adminSvc.getBikerOrderHistory(this.bikerId);
      this.bikerHistory$.then((it:any)=>{
        console.log(it);
      });
     

  }

}
