import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { map, combineAll } from 'rxjs/operators';
import { IUploadProgress } from 'src/services/blob-storage/iblob-storage';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { UploadFileService } from 'src/services/upload-file/upload-file.service';


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
  onAction: boolean;
  catagory$ = Promise.resolve([]);
  uploadProgress$: Observable<IUploadProgress[]>;
  constructor(private uploadFileSvc: UploadFileService, private alertCtr: AlertController, private loadingCtr: LoadingController, private navCtrl: NavController, private route: ActivatedRoute, private fb: FormBuilder, private adminSvc: AdminService, private blobStorage: BlobStorageService) {
    this.restaurantId = this.route.snapshot.paramMap.get('shopId');
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
  }

  async getCategoryList() {
    const alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          // DO SOMETHING
        },
      }],
      backdropDismiss: false
    });

    this.catagory$ = this.adminSvc.getCategoryList(this.restaurantId);
    this.catagory$.then(it => {
      console.log(it);
    }, async error => {
      alert.message = error.error.message;
      await alert.present();
    });
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
        this.adminSvc.createProduct('1', formData).then(_ => {
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
        this.adminSvc.getSasManaUpload().then(it => {
          this.sas = it;
          this.uploadProgress$ = from(this.file as FileList).pipe(
            map(file => this.uploadFileSvc.uploadFile(file, this.sas)),
            combineAll(),
          );

          this.uploadProgress$.subscribe(
            _ => {
              if (_.find(it => it.progress >= 100)) {
                formData.previewImageId = this.sas.imageId
                this.adminSvc.createProduct('1', formData).then(_ => {
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