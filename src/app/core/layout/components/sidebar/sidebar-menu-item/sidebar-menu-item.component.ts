import { Component, Input } from '@angular/core';
import { SidebarMenuItem } from 'src/app/utils/sidebar.interface';

@Component({
  selector: 'ja-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
})
export class SidebarMenuItemComponent {
  @Input() isMinimized = false;
  @Input() menuItem: SidebarMenuItem =  { label: '', icon: '', path: '' , disabled: false};
}
