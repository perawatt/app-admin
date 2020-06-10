import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.page.html',
  styleUrls: ['./operator.page.scss'],
})
export class OperatorPage implements OnInit {
  admin$ = Promise.resolve([]);

  constructor(private adminSvc : AdminService) { }

  ionViewWillEnter() {
    this.admin$ = this.adminSvc.getAdmin();
    this.admin$.then((it:any)=>{
      console.log(it);
    });
  }

  ngOnInit() {
  }

}
