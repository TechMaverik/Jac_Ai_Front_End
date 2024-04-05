import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,  } from '@angular/router';
import { ButtonModule} from 'primeng/button';




@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
    ButtonModule

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
