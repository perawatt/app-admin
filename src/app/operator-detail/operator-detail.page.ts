import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.page.html',
  styleUrls: ['./operator-detail.page.scss'],
})
export class OperatorDetailPage implements OnInit {

  adminDetail$ = Promise.resolve([]);
  title:string;
  // public _id: string;
  constructor(private activatedRoute: ActivatedRoute, private adminSvc: AdminService) { }

  ngOnInit() {
    // this._id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.adminDetail$ = this.adminSvc.getAdminById();
    console.log(this.adminDetail$);
    this.adminDetail$.then((it:any)=>{
      this.title = it.name;
      console.log(it);
      
    });
    


  }

}
