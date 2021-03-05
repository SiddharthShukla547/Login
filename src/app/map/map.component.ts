import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat:number = 19.128140;
  lng:number = 73.011478;

  constructor() { }

  ngOnInit(): void {
  }

}
