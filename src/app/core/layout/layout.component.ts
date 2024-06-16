import { Component, ViewChild } from '@angular/core';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'ja-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  @ViewChild(SidebarMenuComponent) sidebar!: SidebarMenuComponent;
}
