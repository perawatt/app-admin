import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  flows: Array<any> = [
    { name: 'Operation', path: '/operation' },
    { name: 'Restaurant Management', path: '/restaurant' },
    { name: 'Biker Management', path: '/biker' },
    { name: 'Finance', path: '/finance' },
    { name: 'Contract', path: '/contract' },
    { name: 'Operator Management', path: '/operator' },
  ]
  selectedItemColor: string = 'primary';
  unselectedItemColor: string = 'secondary';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public route: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
}
