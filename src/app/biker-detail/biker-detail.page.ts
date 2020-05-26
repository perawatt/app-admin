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

  IonViewDidEnter(){
   
  }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.bikerId = param['bikerId'];
      console.log('biker id : '+this.bikerId);
    });

    this.bikerInfo$ = this.adminSvc.getBikerById(this.bikerId);
    this.bikerInfo$.then((it:any)=>{
      this.title = it.name;
      console.log(it);
    });
  }

  Suspended(){
    this.adminSvc.updateSuspendBiker(this.bikerId).then(()=>{
      this.Reload();
    });
  }

  UnSuspended(){
    this.adminSvc.updateUnsuspendBiker(this.bikerId).then(()=>{
      this.Reload();
    });
  }

  Reload(){
    this.bikerInfo$ = this.adminSvc.getBikerById(this.bikerId);
  }
}
