import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { ISasToken } from 'src/services/blob-storage/azureStorage';
import { map, combineAll } from 'rxjs/operators';
import { IUploadProgress } from 'src/services/blob-storage/iblob-storage';


@Component({
  selector: 'app-restaurant-profile-menu-create',
  templateUrl: './restaurant-profile-menu-create.page.html',
  styleUrls: ['./restaurant-profile-menu-create.page.scss'],
})
export class RestaurantProfileMenuCreatePage implements OnInit {
  file: any;
  sas: any;
  config: any;
  uploadProgress$: Observable<IUploadProgress[]>;
  constructor(private admindSvc: AdminService, private blobStorage: BlobStorageService) { }

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
    this.admindSvc.getSasToken().then(it => {
      this.sas = it;
      this.uploadProgress$ = from(this.file as FileList).pipe(
        map(file => this.uploadFile(file)),
        combineAll(),
      );
    })
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
}