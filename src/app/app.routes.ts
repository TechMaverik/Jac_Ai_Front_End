import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
    {
        path: 'jac-ai',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./core/layout/components/dashboard/dashboard.module').then((m) => m.DashboardModule)
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
