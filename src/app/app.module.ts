import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './home-page/home-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './home-page/sidenav/sidenav.component';
import { HotTableModule } from '@handsontable/angular';
import { TableComponent } from './home-page/table/table.component';
import { SetComponent } from './set/set.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FlipCardModule } from './flip-card/flip-card.module';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import{ IgxIconModule } from 'igniteui-angular';
// import { AgmCoreModule } from '@agm/core';
// import { MapComponent } from './map/map.component';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HomedialogComponent } from './home-page/homedialog/homedialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    HomePageComponent,
    TableComponent,
    SetComponent,
    DashboardComponent,
    HomedialogComponent,
    // MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatListModule,
    RouterModule,
    HotTableModule.forRoot(),
    HttpClientModule,
    FlipCardModule,
    // AgmCoreModule.forRoot({
    //   apiKey:''
    // }),
    MatTooltipModule,
    MatDialogModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    HomedialogComponent
  ]
})
export class AppModule { }
