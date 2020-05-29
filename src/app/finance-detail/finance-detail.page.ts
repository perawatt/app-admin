import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-finance-detail',
  templateUrl: './finance-detail.page.html',
  styleUrls: ['./finance-detail.page.scss'],
})
export class FinanceDetailPage implements OnInit {
  financeDetail$ = Promise.resolve([]);
  public _id: string;
  title:string;
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private adminSvc: AdminService, private router: Router) { }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.financeDetail$ = this.adminSvc.getFinanceById(this._id);
    
    this.financeDetail$.then((it: any) => {
      this.title = it?.destinationName;
    });
  }

  deleteFinanceDetail() {
    this.adminSvc.deleteFinance(this._id).then((it: any) => {
      this.navCtrl.back();
    });
  }
}
