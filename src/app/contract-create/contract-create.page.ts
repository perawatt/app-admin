import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.page.html',
  styleUrls: ['./contract-create.page.scss'],
})
export class ContractCreatePage implements OnInit {
  public fg:FormGroup;
  
  constructor(private navCtrl:NavController,private fb:FormBuilder,private adminSvc:AdminService,private route:Router) { 
    this.fg = this.fb.group({
      'name':null,
      'commissionPercent':null,
      'deliveryPricePerOrder' : null
    });
  }

  ngOnInit() {
  }

  handleSubmit(){
    if(this.fg.valid){
      this.adminSvc.createContractCondition(this.fg.value).then((it:any)=>{
        this.navCtrl.back();
      });
    }
  }

  Back(){
    this.navCtrl.back();
  }
}
