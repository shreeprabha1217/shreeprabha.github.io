import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContactModule } from 'src/contact/contact.module';
import { RouterModule } from '@angular/router';
import { ContactComponent } from 'src/contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    
   
  ],
  imports: [
    CommonModule,
    ContactModule,
    RouterModule
  ]
})
export class HomeModule { }
