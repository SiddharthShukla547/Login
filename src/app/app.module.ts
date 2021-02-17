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
// import { HeaderComponent } from './home-page/header/header.component';
// import { HomepageNavComponent } from './home-page/homepage-nav/homepage-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './home-page/sidenav/sidenav.component';
// import { HomeNavBarComponent } from './home-page/home-nav-bar/home-nav-bar.component';
// import { HomeSideBarComponent } from './home-page/home-side-bar/home-side-bar.component';
// import { NavComponent } from './home-page/nav/nav.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    HomePageComponent,
    // HomeNavBarComponent,
    // HomeSideBarComponent,
    // NavComponent,
    // HeaderComponent,
    // HomepageNavComponent
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
    RouterModule
    // MaterialModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
