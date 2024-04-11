import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from './components/sidebar/sidebar.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    SidebarModule
  ], exports: [LayoutComponent]
})
export class LayoutModule { }
