import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'jac-ai',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./layout/components/dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'jac-ai',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'jac-ai',
        pathMatch: 'full'
    }
];
