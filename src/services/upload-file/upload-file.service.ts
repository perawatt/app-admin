import { Injectable } from '@angular/core';
import { IUploadProgress, ISasToken } from '../blob-storage/iblob-storage';
import { Observable } from 'rxjs';
import { BlobStorageService } from '../blob-storage/blob-storage.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private blobStorage: BlobStorageService) { }
  uploadFile(file: File, sasToken: any): Observable<IUploadProgress> {
    const accessToken: ISasToken = {
      container: sasToken.containerName,
      filename: sasToken.imageId != undefined ? sasToken.imageId : file.name,
      storageAccessToken: sasToken.saS != undefined ? sasToken.saS : sasToken.complementary,
      storageUri: sasToken.storageUri != undefined ? sasToken.storageUri : sasToken.blobUrl
    };
    const fileUrl = accessToken.storageUri + accessToken.container + "/" + accessToken.filename;
    return this.blobStorage
      .uploadToBlobStorage(accessToken, file)
      .pipe(map(progress => this.mapProgress(file, progress, fileUrl)));
  }

  private mapProgress(file: File, progress: number, fileUrl: string): IUploadProgress {
    return {
      filename: file.name,
      progress: progress,
      fileUrl: fileUrl
    };
  }
}
