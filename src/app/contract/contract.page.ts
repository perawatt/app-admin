import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
})
export class ContractPage implements OnInit {

  contactInfo$ = Promise.resolve([]);
  constructor(private adminSvc : AdminService) { }

  ionViewDidEnter() {
    this.contactInfo$ = this.adminSvc.getContractCondition();
    this.contactInfo$.then((it:any)=>{
      console.log(it);
      console.log(JSON.stringify(it))
    });
  }
  
  ngOnInit() {
   

  }

}
