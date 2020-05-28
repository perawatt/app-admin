import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-finance-confirm',
  templateUrl: './finance-confirm.page.html',
  styleUrls: ['./finance-confirm.page.scss'],
})
export class FinanceConfirmPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
