import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.scss'],
})
export class ContractDetailPage implements OnInit {

  public contractConditionId:string;
  contractConditionInfo$ = Promise.resolve([]);
  title:string;

  constructor(private route:ActivatedRoute,private adminSvc:AdminService) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{this.contractConditionId = param['contractConditionId']});
    this.contractConditionInfo$ = this.adminSvc.getContractConditionById(this.contractConditionId);
    this.contractConditionInfo$.then((it:any)=>{
     this.title = it.name;
    });
  }

}
