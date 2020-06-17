import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-create-category',
  templateUrl: './restaurant-create-category.page.html',
  styleUrls: ['./restaurant-create-category.page.scss'],
})
export class RestaurantCreateCategoryPage implements OnInit {
  fg: FormGroup;
  lstOptions = [];
  name: any;
  price = 0;
  _id: string;
  canNote = false;
  constructor(private navCtrl: NavController, private alertCtr: AlertController, private route: ActivatedRoute, private fb: FormBuilder, private adminSvc: AdminService) {
    this._id = this.route.snapshot.paramMap.get('shopId');
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'canNote': false,
      'options': null,
    });
  }

  ngOnInit() {

  }

  addOptions() {
    if (this.name) {
      this.lstOptions.push({
        'name': this.name,
        'price': this.price,
      });
    }
  }

  deleteOptions(data: any) {
    let index = this.lstOptions.findIndex(it => it == data);
    if (index != -1) this.lstOptions.splice(index, 1);
  }

  async submit() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
        },
      }],
      backdropDismiss: false
    });
    this.fg.get('options').patchValue(this.lstOptions);
    this.fg.get('canNote').patchValue(this.canNote);

    if (this.fg.valid) {
      this.adminSvc.createCategory(this._id, this.fg.value).then(_ => {
        this.navCtrl.back();
      }, async error => {
        alert.message = error.error.message;
        await alert.present();
      });
    }
  }
}
