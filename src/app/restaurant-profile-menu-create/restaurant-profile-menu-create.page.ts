import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { ISasToken } from 'src/services/blob-storage/azureStorage';
import { map, combineAll } from 'rxjs/operators';
declare var AzureStorage;
interface IUploadProgress {
  filename: string;
  progress: number;
}

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
  filesSelected = false;
  constructor(private admindSvc: AdminService, private alertCtrl: AlertController, private blobStorage: BlobStorageService) { }

  ngOnInit() {
    this.admindSvc.getSasToken().then(it => {
      this.sas = it;
    })
  }

  selectPhoto(event) {
    this.filesSelected = true;
    console.log(event);
    console.log(event.target.firstChild.files);
    this.uploadProgress$ = from(event.target.firstChild.files as FileList).pipe(
      map(file => this.uploadFile(file)),
      combineAll()
    );
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

  displayPhoto() {
    return "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
    // return (this.file) ? this.file : "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  }
}