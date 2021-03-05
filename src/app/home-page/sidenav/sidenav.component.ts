// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent{

  // mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  // private _mobileQueryListener: () => void;

  // constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  // }

  title = 'NavBar';
  choice = 'Home';

  isMenuOpen = false;
  contentMargin = 240;

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 60;
    } else {
      this.contentMargin = 240;
    }
  }

  DashChange(){
    this.choice = 'Dash';
  }

  HomeChange(){
    this.choice = 'Home';
  }

}
