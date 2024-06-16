import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from './sidebar-menu-item/sidebar-menu-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarMenuComponent,
    SidebarMenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarMenuComponent,
    SidebarMenuItemComponent
  ]
})
export class SidebarModule { }
