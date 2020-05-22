import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.page.html',
  styleUrls: ['./contract-create.page.scss'],
})
export class ContractCreatePage implements OnInit {
  public fg:FormGroup;
  
  constructor(private fb:FormBuilder,private adminSvc : AdminService) { 
    this.fg = this.fb.group({
      'name':null,
      'commissionPercent':null,
      'deliveryPricePerOrder' : null
    });
  }

  ngOnInit() {
  }

  handleSubmit(){
    console.log(this.fg.value);
    if(this.fg.valid){
     // this.adminSvc.createContractCondition(this.fg.value).then((it:any)=>{});
    }
  }
}
