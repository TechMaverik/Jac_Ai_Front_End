import { Component } from '@angular/core';

@Component({
  selector: 'ja-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent {
  isMinimized = false;
  userName = 'John Doe';
  menuItems = [
    { label: 'Home', icon: 'pi-home', path: '' },
    { label: 'Profile', icon: 'pi-user', path: '' },
    { label: 'Settings', icon: 'pi-cog', path: '' },
    { label: 'Help', icon: 'pi-question', path: '' }
  ];

  toggleSidebar() {
    this.isMinimized = !this.isMinimized;
  }

  logout() {
    // Handle logout functionality
    console.log('Logged out');
  }
}
