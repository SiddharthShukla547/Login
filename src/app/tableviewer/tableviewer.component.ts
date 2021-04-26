import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableviewer',
  templateUrl: './tableviewer.component.html',
  styleUrls: ['./tableviewer.component.scss']
})
export class TableviewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
