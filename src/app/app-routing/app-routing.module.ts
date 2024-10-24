import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
     AppRoutingModule,
     HttpClient,
     HttpClientModule
  ]
})
export class AppRoutingModule { }
