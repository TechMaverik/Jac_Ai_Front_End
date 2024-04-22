import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from './sidebar-menu-item/sidebar-menu-item.component';



@NgModule({
  declarations: [
    SidebarMenuComponent,
    SidebarMenuItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarMenuComponent,
    SidebarMenuItemComponent
  ]
})
export class SidebarModule { }
