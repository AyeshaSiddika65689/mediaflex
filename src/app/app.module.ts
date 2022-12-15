import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { UploadComponent } from './components/upload/upload.component';
import { PlayvideoComponent } from './components/playvideo/playvideo.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { SettingsComponent } from './components/settings/settings.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { MatIconModule } from "@angular/material/icon";
import{ MatDialogModule} from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UploadComponent,
    PlayvideoComponent,
    SettingsComponent,
    RatingsComponent,
    NavbarComponent,
    HomeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule ,
    VgCoreModule ,
    VgControlsModule ,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatButtonModule,
    MatIconModule ,
    MatDialogModule,
    MatTabsModule ,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
