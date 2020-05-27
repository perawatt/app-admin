import { Component, OnInit } from '@angular/core';
import { IUploadProgress, ISasToken } from 'src/services/blob-storage/iblob-storage';
import { AdminService } from 'src/services/admin.service';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { Observable, from } from 'rxjs';
import { combineAll, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-biker-create',
  templateUrl: './biker-create.page.html',
  styleUrls: ['./biker-create.page.scss'],
})
export class BikerCreatePage implements OnInit {

  fg: FormGroup;
  file: any;
  sas: any;
  config: any;
  uploadProgress$: Observable<IUploadProgress[]>;

  constructor(private navCtrl: NavController, private route: Router, private fb: FormBuilder, private adminSvc: AdminService, private blobStorage: BlobStorageService) {
    this.fg = this.fb.group({
      'manaCode': [null, Validators.required],
      'name': [null, Validators.required],
      "profileImage": '',
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

  submit() {
    if (this.fg.valid) {
      this.adminSvc.getSasToken().then(it => {
        this.sas = it;
        this.fg.get('profileImage').patchValue(this.sas.blobUrl + '/' + this.sas.containerName + '/' + this.file[0].name);
        this.adminSvc.createAddBiker(this.fg.value).then(_ => {
          this.uploadProgress$ = from(this.file as FileList).pipe(
            map(file => this.uploadFile(file)),
            combineAll(),
          );
          this.navCtrl.back();
        })
      })
    }
  }

  uploadFile(file: File): Observable<IUploadProgress> {
    var accessToken: ISasToken = {
      container: this.sas.containerName,
      filename: file.name,
      storageAccessToken: this.sas.complementary,
      storageUri: this.sas.blobUrl
    };
    return this.blobStorage
      .uploadToBlobStorage(accessToken, file)
      .pipe(map(progress => this.mapProgress(file, progress)));
  }
  private mapProgress(file: File, progress: number): IUploadProgress {
    return {
      filename: file.name,
      progress: progress
    };
  }

  Back() {
    this.navCtrl.back();
  }
}
