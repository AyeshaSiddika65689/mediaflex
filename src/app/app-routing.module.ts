import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlayvideoComponent } from './components/playvideo/playvideo.component';
import { SignupComponent } from './components/signup/signup.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'dashboard',component:DashboardComponent},
{path:'login',component:LoginComponent},
{path:'playvideo', component:PlayvideoComponent},
{path:'upload', component:UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
