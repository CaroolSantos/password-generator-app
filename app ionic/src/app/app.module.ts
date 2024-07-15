import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
  IonicModule.forRoot(), 
  AppRoutingModule,
  ReactiveFormsModule,
  HttpClientModule 
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    HttpClient,
    Storage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
