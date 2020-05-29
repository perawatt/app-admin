import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      'destinationId': [null, Validators.required],
      "amount": [null, Validators.required],
      'note': null,
    })
  }

  ngOnInit() {
  }

  handleSubmit() {
    if (this.fg.valid) {
      this.adminSvc.createFinance(this.fg.value).then((it: any) => {
        this.navCtrl.back();
      })
    }
  }

  cancel(){
    this.navCtrl.back();
  }
}
