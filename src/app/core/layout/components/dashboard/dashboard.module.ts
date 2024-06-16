import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { JaCardModule } from '@ja/ja-ui';
import { ButtonModule } from 'primeng/button';

const routes: Route ={
  path: '',
  component: DashboardComponent
}

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    JaCardModule,
    ButtonModule,
    RouterModule.forChild([routes])
  ], exports: [DashboardComponent]
})
export class DashboardModule { }
