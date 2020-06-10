import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.scss'],
})
export class ContractDetailPage implements OnInit {

  public contractConditionId: string;
  contractConditionInfo$ = Promise.resolve([]);
  title: string;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private adminSvc: AdminService, private alertCtr: AlertController) {
    this.contractConditionId = this.route.snapshot.paramMap.get('contractConditionId');
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const alert = await this.alertCtr.create({
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

    this.contractConditionInfo$ = this.adminSvc.getContractConditionById(this.contractConditionId);
    this.contractConditionInfo$.then((it: any) => {
      this.title = it.name;
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
  }

}
