import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.page.html',
  styleUrls: ['./restaurant-create.page.scss'],
})
export class RestaurantCreatePage implements OnInit {

  public fg: FormGroup;
  public contactInfo$ = Promise.resolve([]);
  public commissionPercent: number;
  public deliveryPricePerOrder: number;

  constructor(private fb: FormBuilder, private adminSvc: AdminService, private navCtrl: NavController) {
    this.fg = this.fb.group({
      'name': null,
      'tel': [null, Validators.required],
      'manaCode': [null, Validators.required],
      'note': null,
      'contractConditionId': [null, Validators.required],
    });
  }

  ngOnInit() {
    this.contactInfo$ = this.adminSvc.getContractCondition();
    this.contactInfo$.then((it: any) => {
      console.log(it);
    });
  }

  getContractDetail() {
    console.log(this.fg.get('contractConditionId').value);
    this.adminSvc.getContractConditionById(this.fg.get('contractConditionId').value).then(it => {
      console.log(it);
      this.commissionPercent = it.commissionPercent;
      this.deliveryPricePerOrder = it.deliveryPricePerOrder;
      console.log(this.commissionPercent );
      
    });
  }

  handleSubmit() {
    console.log(this.fg.value);
    this.adminSvc.createAddRestaurant(this.fg.value).then(it=>{
      this.navCtrl.back();
    });
  }

  cancel(){
    this.navCtrl.back();
  }

}
