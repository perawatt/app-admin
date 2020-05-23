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
  constructor(private route:ActivatedRoute,private adminSvc:AdminService) { }

  ngOnInit() {
     this.route.params.subscribe(param=>{this.bikerId = param['bikerId']});
     console.log('biker id : '+this.bikerId);
      this.bikerHistory$ = this.adminSvc.getBikerOrderHistory(this.bikerId);
      this.bikerHistory$.then((it:any)=>{
        console.log(it);
      });
     

  }

}
