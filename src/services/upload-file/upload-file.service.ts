import { Injectable } from '@angular/core';
import { BlobStorageService } from '../blob-storage/blob-storage.service';
import { ISasToken, IUploadProgress } from '../blob-storage/iblob-storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private blobStorage: BlobStorageService) { }
  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  uploadFile(file: File, sasToken: any): Observable<IUploadProgress> {
    const filename = this.newGuid() + '.' + file.name.split('.')[file.name.split('.').length - 1];
    const container = sasToken.containerName;
    const storageAccessToken = sasToken.saS;
    const storageUri = sasToken.storageUri;
    const fileurl = storageUri + "/" + container + "/" + filename;
    const accessToken: ISasToken = {
      container: container,
      filename: filename,
      storageAccessToken: storageAccessToken,
      storageUri: storageUri
    };
    return this.blobStorage
      .uploadToBlobStorage(accessToken, file)
      .pipe(map((progress: number) => this.mapProgress(filename, progress, fileurl)));
  }

  private mapProgress(filename: string, progress: number, fileurl: string): IUploadProgress {
    return {
      filename: filename,
      progress: progress,
      fileurl: fileurl
    };
  }
}
