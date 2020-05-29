import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private modalCtrl: ModalController, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private adminSvc: AdminService) {
    this.fg = this.fb.group({
      'heading': [null, Validators.required],
      'info': null,
    })
  }

  ngOnInit() {
  }

  handleSubmit() {
    if (this.fg.valid)
    this.adminSvc.createSendCancelRequest(this._id, this.fg.value).then((it: any) => {
      this.modalCtrl.dismiss(this._id);
      })
  }

  cancalModal(){
    this.modalCtrl.dismiss();
  }


}
