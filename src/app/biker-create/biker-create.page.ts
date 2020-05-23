import { Component, OnInit } from '@angular/core';
import { IUploadProgress, ISasToken } from 'src/services/blob-storage/iblob-storage';
import { AdminService } from 'src/services/admin.service';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { Observable, from } from 'rxjs';
import { combineAll, map } from 'rxjs/operators';

@Component({
  selector: 'app-biker-create',
  templateUrl: './biker-create.page.html',
  styleUrls: ['./biker-create.page.scss'],
})
export class BikerCreatePage implements OnInit {
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
