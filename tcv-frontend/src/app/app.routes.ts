import { Routes } from '@angular/router';
import { Layout } from './common/layout/layout';
import { Dashboards } from './dashboards/dashboards'
import { RouteGuard } from './services/route-guard';
import { Home } from './common/home/home'
import { Login } from './login/login';

export const routes: Routes = [
    //  { path: '', redirectTo: '/', pathMatch:'full' },
    { path: '', component: Login },
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'dashboards',
                component: Dashboards,
                canActivate: [RouteGuard],
                data: {
                    expectedRole: ['admin', 'user']
                }
            }

        ]
    },
];
