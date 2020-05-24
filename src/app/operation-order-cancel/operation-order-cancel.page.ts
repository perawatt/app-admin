import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-operation-order-cancel',
  templateUrl: './operation-order-cancel.page.html',
  styleUrls: ['./operation-order-cancel.page.scss'],
})
export class OperationOrderCancelPage implements OnInit {
  public fg: FormGroup;
  @Input() _id: string;

  constructor(private modalController: ModalController, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private adminSvc: AdminService) {
    this.fg = this.fb.group({
      'heading': null,
      'info': null,
    })
  }

  ngOnInit() {
  }

  handleSubmit() {
    console.log('heading', this.fg.get('heading').value);
    console.log('heading2', this.fg.get('info').value);
    console.log(this.fg.value);
    console.log(this._id);
    if (this.fg.get('heading').value != null && this.fg.get('info').value != null)
    this.adminSvc.createSendCancelRequest(this._id, this.fg.value).then((it: any) => {
      this.modalController.dismiss(this._id);
      })
  }

  cancalModal(){
    this.modalController.dismiss();
  }


}
