import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-create-qr',
  templateUrl: './restaurant-create-qr.page.html',
  styleUrls: ['./restaurant-create-qr.page.scss'],
})
export class RestaurantCreateQrPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
