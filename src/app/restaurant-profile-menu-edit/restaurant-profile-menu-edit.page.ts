import { Component, OnInit } from '@angular/core';
import { IUploadProgress } from 'src/services/blob-storage/iblob-storage';
import { Observable, from } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadFileService } from 'src/services/upload-file/upload-file.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { combineAll, map } from 'rxjs/operators';

@Component({
  selector: 'app-restaurant-profile-menu-edit',
  templateUrl: './restaurant-profile-menu-edit.page.html',
  styleUrls: ['./restaurant-profile-menu-edit.page.scss'],
})
export class RestaurantProfileMenuEditPage implements OnInit {
  fg: FormGroup;
  restaurantId: string;
  productId: string;
  file: any;
  alert: any;
  sas: any;
  config: any;
  onAction: boolean;
  catagory$ = Promise.resolve([]);
  catagory: any[];
  uploadProgress$: Observable<IUploadProgress[]>;
  constructor(private uploadFileSvc: UploadFileService, private alertCtr: AlertController, private loadingCtr: LoadingController, private navCtrl: NavController, private route: ActivatedRoute, private fb: FormBuilder, private adminSvc: AdminService, private blobStorage: BlobStorageService) {
    this.restaurantId = this.route.snapshot.paramMap.get('shopId');
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      "categoryName": [null, Validators.required],
      "previewImageId": null,
      "price": [0, Validators.required],
      "note": ''
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getCategoryList();
    this.getData();
  }

  async getData() {
    this.adminSvc.getProduct(this.restaurantId, this.productId).then((it: any) => {
      console.log(it);
      this.fg.patchValue(it);
    }, async error => {
      this.alert.message = error.error.message;
      await this.alert.present();
    });
  }

  getPhoto(): string {
    let urlImage = this.fg.get('previewImageId').value != null ? this.fg.get('previewImageId').value : 'assets/imgs/dfmenu.png';
    return "https://manamockapi.azurewebsites.net/Image/" + urlImage;
  }

  async getCategoryList() {
    this.alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.navCtrl.back();
        },
      }],
      backdropDismiss: false
    });

    this.catagory$ = this.adminSvc.getCategoryList(this.restaurantId);
    this.catagory$.then((it: any) => {
      console.log(it);
      this.catagory = it;
    }, async error => {
      this.alert.message = error.error.message;
      await this.alert.present();
    });
  }

  checkCategoryCanNote(): boolean {
    let categorySelect = this.catagory && this.catagory.find((it: any) => it.categoryName == this.fg.get('categoryName').value);
    return categorySelect && categorySelect.canNote;
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

  async submit() {
    if (this.fg.valid) {
      this.onAction = true;
      let formData = this.fg.value;
      if (this.file == null) {
        this.adminSvc.updateProduct('1', this.productId, formData).then(_ => {
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
        this.adminSvc.getSasManaUpload(formData.previewImageId).then(it => {
          this.sas = it;
          this.uploadProgress$ = from(this.file as FileList).pipe(
            map(file => this.uploadFileSvc.uploadFile(file, this.sas)),
            combineAll(),
          );

          this.uploadProgress$.subscribe(
            _ => {
              if (_.find(it => it.progress >= 100)) {
                this.adminSvc.updateProduct('1', this.productId, formData).then(_ => {
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

}
