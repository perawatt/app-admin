import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-profile-menu-create',
  templateUrl: './restaurant-profile-menu-create.page.html',
  styleUrls: ['./restaurant-profile-menu-create.page.scss'],
})
export class RestaurantProfileMenuCreatePage implements OnInit {
  file: any;
  blobUri = "https://uploadblobadmin.blob.core.windows.net/";
  constructor(private admindSvc: AdminService) { }

  ngOnInit() {
  }

  selectPhoto(event) {
    this.file = event.target.value;
    console.log(event);

    // var preview = document.querySelectorAll('img');
    // var reader = new FileReader();
    // reader.onload = function (e: any) {
    //   preview[preview.length - 1].src = e.target.result;
    // };
    // reader.readAsDataURL(this.file);
  }
  displayPhoto() {
    return (this.file) ? this.file : "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
  }
  uploadToCloud() {
    let resterantId = "1111";
    this.admindSvc.createUploadPhoto(this.file, resterantId);
  }

  // async submitForm() {
  //   if (this.fg.valid) {
  //     this.onAction = true;
  //     let formData = this.fg.value;
  //     if (this.bannerFile == null) {
  //       formData.promotionBanner = this.DefaultCouponBannerUrl;
  //       this.privilegeSvc.createPromotion(this.privilegeId, this.fg.value).then(_ => {
  //         this.navCtr.setDirection('root');
  //         this.router.navigate([this.submitSuccessLink]);
  //       });
  //     }
  //     else {
  //       const loading = await this.loadingCtr.create({
  //         message: 'Banner Uploading....'
  //       });
  //       const alert = await this.alertCtr.create({
  //         header: 'Error',
  //         message: 'Banner Upload Failed.',
  //         buttons: ['OK']
  //       });
  //       await loading.present();
  //       this.shopAndCouponSvc.getCouponBlobSas(this.privilegeId).then(resolve => {
  //         let sasToken = resolve;
  //         this.uploadProgress$ = from(this.bannerFile).pipe(
  //           map(file => this.uploadFileSvc.uploadFile(file, sasToken)),
  //           combineAll()
  //         );

  //         this.uploadProgress$.subscribe(
  //           _ => {
  //             if (_.find(it => it.progress >= 100)) {
  //               formData.promotionBanner = _.find(it => it.progress >= 100).fileurl;
  //               this.privilegeSvc.createPromotion(this.privilegeId, this.fg.value).then(_ => {
  //                 loading.dismiss();
  //                 this.navCtr.setDirection('root');
  //                 this.router.navigate([this.submitSuccessLink]);
  //               }, async _ => {
  //                 const alert = await this.alertCtr.create({
  //                   header: 'Error',
  //                   message: _.error.message,
  //                   buttons: ['ตกลง']
  //                 });

  //                 await alert.present();
  //                 this.onAction = false;
  //               });
  //             }
  //           }, error => {
  //             loading.dismiss();
  //             alert.present();
  //             this.onAction = false;
  //           })
  //       });
  //     }
  //   }
  // }
  // uploadToCloud() {

  //   let isFileValid = this.file != null && this.file.name;

  //   if (!isFileValid) {
  //     const showError = this.alertCtrl.create({
  //       'title': 'มีข้อผิดพลาด',
  //       'message': 'เกิดข้อผิดพลาดในการส่งข้อมูล ไม่พบไฟล์ข้อมูล',
  //       'buttons': ["ตกลง"],
  //     });
  //     showError.present();
  //     return;
  //   }

  //   // TODO: Get UserId
  //   var userID = GlobalVariable.User.userID;
  //   const blobUri = "https://nsodev.blob.core.windows.net";
  //   const loading = this.loadingCtrl.create({
  //     content: '',
  //     enableBackdropDismiss: false,
  //   });
  //   loading.present();

  //   let hasError = false;
  //   this.cloud.getUploadToCloud(userID).subscribe(async d2c => {
  //     let blob = AzureStorage.Blob.createBlobServiceWithSas(blobUri, d2c.complementary);

  //     try {
  //       const options = { blockSize: this.getBlockSize(this.file) };
  //       blob.createBlockBlobFromBrowserFile(
  //         d2c.containerName,
  //         this.file.name,
  //         this.file,
  //         options,
  //         (err, result, resp) => {
  //           if (!resp.isSuccessful) {
  //             // err != null?
  //             hasError = true;
  //           }

  //           this.cloud.uploadSuccess(userID, d2c.containerName).subscribe(async (data: any) => {
  //             var timer = setInterval(() => {
  //               this.cloud.CheckStatus(data.id).subscribe(async (response: any) => {
  //                 console.log("response: ", response);
  //                 if (response.isTaskCompleted) {
  //                   if (response.isSuccess) {
  //                     loading.dismiss();
  //                     this.displayMessage(hasError);
  //                     clearInterval(timer);
  //                   }
  //                   else {
  //                     hasError = true;
  //                     loading.dismiss();
  //                     this.displayMessage(hasError);
  //                     clearInterval(timer);
  //                     const showError = this.alertCtrl.create({
  //                       'title': 'มีข้อผิดพลาด',
  //                       'message': response.errorMessage,
  //                       'buttons': ["ตกลง"],
  //                     });
  //                     showError.present();
  //                   }
  //                 }
  //               })
  //             }, 2000);
  //           });
  //         })();
  //     } catch (error) {
  //       console.log(error);
  //     }


  //   }, error => {
  //     const showError = this.alertCtrl.create({
  //       'title': 'มีข้อผิดพลาด',
  //       'message': 'เกิดข้อผิดพลาดในการส่งข้อมูล แต่ข้อมูลในเครื่องจะไม่ได้รับความเสียหายใดๆทั้งสิ้น เพียงท่านเชื่อมต่อสัญญาณอินเตอร์เน็ตคุณภาพดีขึ้นและลองใหม่อีกครั้งจะสามารถส่งข้อมูลได้',
  //       'buttons': ["ตกลง"],
  //     });
  //     showError.present();
  //   });
  // }
}
