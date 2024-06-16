import { Component, Input } from '@angular/core';

@Component({
  selector: 'ja-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
})
export class SidebarMenuItemComponent {
  @Input() isMinimized = false;
  @Input() menuItem =  { label: '', icon: '', path: '' };
}
