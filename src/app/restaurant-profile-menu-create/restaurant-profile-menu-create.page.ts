import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { ISasToken } from 'src/services/blob-storage/azureStorage';
import { map, combineAll } from 'rxjs/operators';
import { IUploadProgress } from 'src/services/blob-storage/iblob-storage';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-restaurant-profile-menu-create',
  templateUrl: './restaurant-profile-menu-create.page.html',
  styleUrls: ['./restaurant-profile-menu-create.page.scss'],
})
export class RestaurantProfileMenuCreatePage implements OnInit {
  fg: FormGroup;
  restaurantId: string;
  file: any;
  sas: any;
  config: any;
  _id: string;
  catagory$ = Promise.resolve([]);
  uploadProgress$: Observable<IUploadProgress[]>;
  imageIdForGet: string;
  constructor(private navCtrl: NavController, private route: ActivatedRoute, private fb: FormBuilder, private adminSvc: AdminService, private blobStorage: BlobStorageService) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      "categoryName": [null, Validators.required],
      "previewImageId": '',
      "price": [0, Validators.required],
      "note": ''
    });
  }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('shopId');
    this.catagory$ = this.adminSvc.getCategoryList(this._id);
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

  goBack() {
    this.navCtrl.back();
  }

  submit() {
    if (this.fg.valid) {
      this.adminSvc.getSasManaUpload().then(it => {
        console.log(it);
        this.sas = it;
        this.fg.get('previewImageId').patchValue(this.sas.imageId);
        this.adminSvc.createProduct('1', this.fg.value).then(_ => {
          this.uploadProgress$ = from(this.file as FileList).pipe(
            map(file => this.uploadFile(file)),
            combineAll(),
          );
          this.navCtrl.back();
        })
      });
    }
  }

  uploadFile(file: File): Observable<IUploadProgress> {
    var accessToken: ISasToken = {
      container: this.sas.containerName,
      filename: this.sas.imageId,
      storageAccessToken: this.sas.saS,
      storageUri: this.sas.storageUri
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