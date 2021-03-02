import { Component, OnInit } from '@angular/core';
import * as Handsontable from "handsontable";
import { HttpClient } from '@angular/common/http'
// import { Observable } from 'rxjs/Observable';
import { TableserviceService } from '../../tableservice.service';
import { tableServiceClasses } from '../../Classes/tableserviceclasses';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  lst: tableServiceClasses[];

  constructor( private http: HttpClient, private tableservice: TableserviceService ) { }

  ngOnInit(): void {
    this.tableservice.getData()
    .subscribe(
      data => {
        this.lst = data;
      }
    )
  }



  // data: any[] = [
  //   ['', 'Tesla', 'Mercedes', 'Toyota', 'Volvo'],
  //   ['2019', 10, 11, 12, 13],
  //   ['2020', 20, 11, 14, 13],
  //   ['2021', 30, 15, 12, 13]
  // ]




  tableSettings: any = {
    //rowHeaders: true,
    // colHeaders: true,
    viewportColumnRenderingOffset: 27,
    viewportRowRenderingOffset: "auto",
    //colWidths: 150,
    height: 450,
    // allowInsertColumn: false,
    // allowInsertRow: false,
    // allowRemoveColumn: false,
    // allowRemoveRow: false,
    // autoWrapRow: false,
    // autoWrapCol: false,
    //  stretchH: "all",
    width: 1000 ,
    // autoWrapRow: true,
    // height: 487,
    // maxRows: 22,
    manualRowResize: true,
    // overflow: "hidden",   //Check if this is the right way or else use in CSS
    // className: "htCenter",
    className: "htMiddle",
    manualColumnResize: true,
    colHeaders: ["Fuel Description","Fuel Type","Uom","Fuel Consumed","Fuel Cost","Data Provider","Data Approver"],
     rowHeaders: true,
    columns:[
      {data:0},
      {data:1},
      {data:2},
      {data:3},
      {data:4},
    //   {readOnly: true,
    //     rendrer: (instance, TD, row, col, prop, value, cellProperties) =>{
    //     TD.innerHTML = `<button>Submit</button>`;
    //     return TD;
    //   }
    // },
    //   {readOnly: true,
    //     rendrer: (instance, TD, row, col, prop, value, cellProperties) =>{
    //     TD.innerHTML = `<button>Submit</button>`;
    //     return TD;
    //   }
    // }
    ],
    manualRowMove: true,
    manualColumnMove: true,
    contextMenu: true,
    filters: true,
    dropdownMenu: true,
    afterValidate: function(isValid, value, row, prop){
      if(value == false){
        console.log( value, row, prop)
        alert("Invalid")
        //Value = isValid
        // row = inserted invalid value
        //prop = row index changed
        }
        }
  }

  detectChanges = (hotInstance, changes, source) => { console.log(changes); }

  //  renderSubmit(instance, td, row, col, prop, value, cellProperties){
  //   td.innerHTML = "<button>Submit</button>";
  // }
}
