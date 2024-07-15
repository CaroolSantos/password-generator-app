import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HttpClient } from '@angular/common/http';
import { HomePageRoutingModule } from './home-routing.module';
import { PasswordService } from '../Services/password.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage],
  providers:[
    HttpClient,
    PasswordService
  ]
})
export class HomePageModule {}
