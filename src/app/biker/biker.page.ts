import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-biker',
  templateUrl: './biker.page.html',
  styleUrls: ['./biker.page.scss'],
})
export class BikerPage implements OnInit {

  bikerListInfo$: Promise<any>;

  constructor(private adminSvc: AdminService) { }

  ionViewDidEnter() {
    this.bikerListInfo$ = this.adminSvc.getBiker();
    this.bikerListInfo$.then((it: any) => {
      console.log(it);
    });
  }

  getImage(image: string): string {
    return "https://3rddeliverystorage.blob.core.windows.net/biker/" + image;
  }

  ngOnInit() {

  }


}
