import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
    {
        path: 'web-app',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./core/layout/components/dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            {
                path: 'error',
                loadChildren: () => import('./core/error-pages/error-pages.module').then((m)=> m.ErrorPagesModule)
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
        redirectTo: 'web-app',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'web-app',
        pathMatch: 'full'
    }
];
