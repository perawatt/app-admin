import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-finance-create',
  templateUrl: './finance-create.page.html',
  styleUrls: ['./finance-create.page.scss'],
})
export class FinanceCreatePage implements OnInit {
  public fg: FormGroup;

  constructor(private adminSvc: AdminService, private fb: FormBuilder, private router: Router, private navCtrl: NavController) {
    this.fg = this.fb.group({
      'destinationId': null,
      "amount": null,
      'note': null,
    })
  }

  ngOnInit() {
  }

  handleSubmit() {
    console.log('heading', this.fg.get('destinationId').value);
    console.log('heading2', this.fg.get('amount').value);
    console.log('heading3', this.fg.get('note').value);
    console.log(this.fg.value);
    if (this.fg.valid) {
      this.adminSvc.createFinance(this.fg.value).then((it: any) => {
        console.log("xxx: " + JSON.stringify(it));     
        this.navCtrl.back();
      })
    }
  }

  cancel(){
    this.navCtrl.back();
  }
}
