import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicErrorComponent } from './basic-error.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route ={
  path: '',
  component: BasicErrorComponent
}

@NgModule({
  declarations: [
    BasicErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routes])
  ]
})
export class ErrorPagesModule { }
