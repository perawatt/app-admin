import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-restaurant-create-category',
  templateUrl: './restaurant-create-category.page.html',
  styleUrls: ['./restaurant-create-category.page.scss'],
})
export class RestaurantCreateCategoryPage implements OnInit {
  fg: FormGroup;
  lstOptions = [];
  name: any;
  price: number;
  canNote = false;
  constructor(private fb: FormBuilder, private adminSvc: AdminService) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'canNote': false,
      'options': null,
    });
  }

  ngOnInit() {
  }

  addOptions() {
    this.lstOptions.push({
      'name': this.name,
      'price': this.price,
    });
  }

  deleteOptions(data: any) {
    let index = this.lstOptions.findIndex(it => it == data);
    if (index != -1) this.lstOptions.splice(index, 1);
  }

  submit() {
    this.fg.get('options').patchValue(this.lstOptions);
    this.fg.get('canNote').patchValue(this.canNote);

    if (this.fg.valid) {
      this.adminSvc.createCategory('1', this.fg.value);
    }
  }
}
