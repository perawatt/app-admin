import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-restaurant-edit-category-detail',
  templateUrl: './restaurant-edit-category-detail.page.html',
  styleUrls: ['./restaurant-edit-category-detail.page.scss'],
})
export class RestaurantEditCategoryDetailPage implements OnInit {
  fg: FormGroup;
  lstOptions = [];
  name: any;
  price = 0;
  shopId: string;
  categoryId: string;
  alert: any;
  canNote = false;
  constructor(private navCtrl: NavController, private alertCtr: AlertController, private route: ActivatedRoute, private fb: FormBuilder, private adminSvc: AdminService) {
    this.shopId = this.route.snapshot.paramMap.get('shopId');
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'canNote': false,
      'options': null,
    });
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.navCtrl.back();
        },
      }],
      backdropDismiss: false
    });

    this.adminSvc.getCategory(this.shopId, this.categoryId).then((it: any) => {
      console.log(it);
      this.fg.patchValue(it);
      this.lstOptions = this.fg.get('options').value;
      this.canNote = this.fg.get('canNote').value;
    }, async error => {
      this.alert.message = error.error.message;
      await this.alert.present();
    });
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
    this.fg.get('options').patchValue(this.lstOptions);
    this.fg.get('canNote').patchValue(this.canNote);

    if (this.fg.valid) {
      this.adminSvc.updateCategory(this.shopId, this.categoryId, this.fg.value).then(_ => {
        this.navCtrl.back();
      }, async error => {
        this.alert.message = error.error.message;
        await this.alert.present();
      });
    }
  }
}
