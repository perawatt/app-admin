import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-edit-category',
  templateUrl: './restaurant-edit-category.page.html',
  styleUrls: ['./restaurant-edit-category.page.scss'],
})
export class RestaurantEditCategoryPage implements OnInit {
  data$ = Promise.resolve([]);
  _id: string;

  constructor(private route: ActivatedRoute, private adminSvc: AdminService) { }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('shopId');
    this.data$ = this.adminSvc.getCategoryList(this._id);
  }
}
