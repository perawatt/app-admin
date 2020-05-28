import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IAzureStorage, BLOB_STORAGE_TOKEN } from 'src/services/blob-storage/azureStorage';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { ModalsModule } from 'src/modals/modals.module';

declare var AzureStorage: IAzureStorage;
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ModalsModule,    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BlobStorageService,
    {
      provide: BLOB_STORAGE_TOKEN,
      useValue: AzureStorage.Blob
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
