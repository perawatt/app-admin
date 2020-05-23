import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-biker-detail',
  templateUrl: './biker-detail.page.html',
  styleUrls: ['./biker-detail.page.scss'],
})
export class BikerDetailPage implements OnInit {

  bikerId:string ;
  bikerInfo$:Promise<any>;
  title:string;

  constructor(private route:ActivatedRoute,private adminSvc:AdminService) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.bikerId = param['bikerId'];
      console.log('biker id : '+this.bikerId);
    });

    this.bikerInfo$ = this.adminSvc.getBikerById(this.bikerId);
    this.bikerInfo$.then((it:any)=>{
      this.title = it.name;
    });


  }

}
