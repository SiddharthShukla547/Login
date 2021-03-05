import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  CBMdis = false;
  SHPPLdis = false;

  title = 'NavBar';

  isMenuOpen = false;
  contentMargin = 240;

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 60;
    } else {
      this.contentMargin = 240;
    }
  }

  displayCBM(){
    this.CBMdis = !this.CBMdis;
    this.SHPPLdis = false;
  }

  displaySHPPL(){
    this.SHPPLdis = !this.SHPPLdis;
    this.CBMdis = false;
  }

  getColor(){
    if(this.CBMdis)
      return '#FF4081';
    if(this.SHPPLdis)
      return '#4527A0';
  }

}
