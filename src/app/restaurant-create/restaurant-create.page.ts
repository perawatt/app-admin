import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';
import { NavController, AlertController } from '@ionic/angular';

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

  constructor(private fb: FormBuilder, private adminSvc: AdminService, private navCtrl: NavController, private alertCtr: AlertController) {
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
  }

  getContractDetail() {
    this.adminSvc.getContractConditionById(this.fg.get('contractConditionId').value).then(it => {
      this.commissionPercent = it.commissionPercent;
      this.deliveryPricePerOrder = it.deliveryPricePerOrder;
    });
  }

  async handleSubmit() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          // DO SOMETHING
        },
      }],
      backdropDismiss: false
    });

    this.adminSvc.createAddRestaurant(this.fg.value).then(it => {
      this.navCtrl.back();
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

  cancel() {
    this.navCtrl.back();
  }

}
