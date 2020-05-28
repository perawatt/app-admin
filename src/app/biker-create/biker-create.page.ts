import { Component, OnInit } from '@angular/core';
import { IUploadProgress, ISasToken } from 'src/services/blob-storage/iblob-storage';
import { AdminService } from 'src/services/admin.service';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { Observable, from } from 'rxjs';
import { combineAll, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { UploadFileService } from 'src/services/upload-file/upload-file.service';

@Component({
  selector: 'app-biker-create',
  templateUrl: './biker-create.page.html',
  styleUrls: ['./biker-create.page.scss'],
})
export class BikerCreatePage implements OnInit {
  fg: FormGroup;
  file: any;
  onAction: boolean;
  sas: any;
  config: any;
  uploadProgress$: Observable<IUploadProgress[]>;

  constructor(private alertCtr: AlertController, private loadingCtr: LoadingController, private uploadFileSvc: UploadFileService, private navCtrl: NavController, private route: Router, private fb: FormBuilder, private adminSvc: AdminService, private blobStorage: BlobStorageService) {
    this.fg = this.fb.group({
      'manaCode': [null, Validators.required],
      'name': [null, Validators.required],
      "profileImage": null,
      "address": [null, Validators.required],
      "tel": [null, Validators.required],
      "note": ''
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
    if (this.fg.valid) {
      this.onAction = true;
      let formData = this.fg.value;
      if (this.file == null) {
        this.adminSvc.createAddBiker(formData).then(_ => {
          this.navCtrl.back();
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
                this.adminSvc.createAddBiker(formData).then(_ => {
                  loading.dismiss();
                  this.navCtrl.back();
                }, async _ => {
                  const alert = await this.alertCtr.create({
                    header: 'Error',
                    message: _.error.message,
                    buttons: ['ตกลง']
                  });

                  await alert.present();
                  this.onAction = false;
                });
              }
            }, error => {
              loading.dismiss();
              alert.present();
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
