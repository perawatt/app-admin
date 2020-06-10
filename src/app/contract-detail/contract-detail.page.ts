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

  constructor(private route: ActivatedRoute, private adminSvc: AdminService, private alertCtr: AlertController) { }

  ngOnInit() {
    this.route.params.subscribe(param => { this.contractConditionId = param['contractConditionId'] });
    // this.contractConditionId = "999";
    this.contractConditionInfo$ = this.adminSvc.getContractConditionById(this.contractConditionId);
    this.contractConditionInfo$.then((it: any) => {
      this.title = it.name;
      console.log(it);
    }, async error => {
      const alert = await this.alertCtr.create({
        header: 'เกิดข้อผิดพลาด',
        message: error.error.message,
        buttons: [{
          text: 'ตกลง',
          handler: () => {
            // DO SOMETHING
          },
        }],
        backdropDismiss: false
      });

      await alert.present();
    });
  }

}
