import { AdminService } from 'src/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-edit-category',
  templateUrl: './restaurant-edit-category.page.html',
  styleUrls: ['./restaurant-edit-category.page.scss'],
})
export class RestaurantEditCategoryPage implements OnInit {
  data$ = Promise.resolve([]);

  constructor(private adminSvc: AdminService) { }

  ngOnInit() {
    this.data$ = this.adminSvc.getCategoryList('1');
  }

  createCategoty() {
  }
}
