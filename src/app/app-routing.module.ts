import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlayvideoComponent } from './components/playvideo/playvideo.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SignupComponent } from './components/signup/signup.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{ path: 'dashboard', redirectTo: 'dashboard/homeDashboard', pathMatch:'full' },
{path:'dashboard',component:DashboardComponent, children:[
{path:'homeDashboard', component:HomeDashboardComponent},
{path:'playvideo', component:PlayvideoComponent},
{path:'upload', component:UploadComponent},
{path:'ratings', component:RatingsComponent},
{path:'settings', component:SettingsComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
