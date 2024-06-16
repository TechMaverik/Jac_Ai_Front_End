import { Component } from '@angular/core';
import { SidebarMenuItem } from 'src/app/utils/sidebar.interface';

@Component({
  selector: 'ja-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent {
  isMinimized = false;
  userName = 'John Doe';
  menuItems: SidebarMenuItem[] = [
    { label: 'Dashboard', icon: 'pi-home', path: '/web-app/dashboard', disabled: false }
  ];

  toggleSidebar() {
    this.isMinimized = !this.isMinimized;
  }

  logout() {
    // Handle logout functionality
    console.log('Logged out');
  }
}
