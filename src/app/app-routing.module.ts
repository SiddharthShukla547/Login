import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SetComponent } from './set/set.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TableviewerComponent } from '../app/tableviewer/tableviewer.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ]
  },
  {
    path: 'HomePage',
    component: HomePageComponent,
  },
  {path:'Dashboard', component: DashboardComponent},
  {path:'Settings', component: SetComponent},
  {path: 'Tables', component: TableviewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
