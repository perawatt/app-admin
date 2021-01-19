import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { IUploadProgress } from 'src/services/blob-storage/iblob-storage';
import { AdminService } from 'src/services/admin.service';
import { UploadFileService } from 'src/services/upload-file/upload-file.service';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { map, combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-operator-create',
  templateUrl: './operator-create.page.html',
  styleUrls: ['./operator-create.page.scss'],
})
export class OperatorCreatePage implements OnInit {
  fg: FormGroup;
  file: any;
  onAction: boolean;
  sas: any;
  config: any;
  uploadProgress$: Observable<IUploadProgress[]>;
  constructor(private alertCtr: AlertController, private loadingCtr: LoadingController, private uploadFileSvc: UploadFileService, private navCtrl: NavController, private fb: FormBuilder, private adminSvc: AdminService) {
    this.fg = this.fb.group({
      'manaCode': [null, Validators.required],
      'name': null,
      "profileImage": null,
      "address": null,
      "phoneNumber": [null, Validators.required],
      "note": null,
    });
  }

  ngOnInit() {
  }

  selectPhoto(event) {
    this.file = event.target.firstChild.files;
    var preview = document.querySelectorAll('img');
    var reader = new FileReader();
    reader.onload = function (e: any) {
      preview[preview.length - 1].src = e.target.result;
    };
    reader.readAsDataURL(this.file[0]);
  }

  async submit() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
        },
      }],
      backdropDismiss: false
    });

    if (this.fg.valid) {
      this.onAction = true;
      let formData = this.fg.value;
      if (this.file == null) {
        this.adminSvc.createAdmin(formData).then(_ => {
          this.navCtrl.back();
        }, async error => {
          alert.message = error.error.message;
          await alert.present();
        });
      }
      else {
        const loading = await this.loadingCtr.create({
          message: 'Image Uploading....'
        });
        const alert = await this.alertCtr.create({
          header: 'Error',
          message: 'Image Upload Failed.',
          buttons: ['OK']
        });
        await loading.present();
        this.adminSvc.getSasToken().then(it => {
          this.sas = it;
          this.uploadProgress$ = from(this.file as FileList).pipe(
            map(file => this.uploadFileSvc.uploadFile(file, this.sas)),
            combineAll(),
          );

          this.uploadProgress$.subscribe(
            _ => {

              if (_.find(it => it.progress >= 100)) {
                formData.profileImage = _.find(it => it.progress >= 100).fileUrl;
                this.adminSvc.createAdmin(formData).then(_ => {
                  loading.dismiss();
                  this.navCtrl.back();
                }, async _ => {
                  const alert = await this.alertCtr.create({
                    header: 'Error',
                    message: _.error.message,
                    buttons: ['ตกลง']
                  });

                  loading.dismiss();
                  await alert.present();
                  this.onAction = false;
                });
              }
            }, async error => {
              loading.dismiss();
              await alert.present();
              this.onAction = false;
            })
        });
      }
    }
  }

  Back() {
    this.navCtrl.back();
  }
}
