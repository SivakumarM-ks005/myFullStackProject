import { Routes } from '@angular/router';
import { Layout } from './common/layout/layout';
import { Dashboards } from './dashboards/dashboards'
import { RouteGuard } from './services/route-guard';

export const routes: Routes = [
    {
        path:'',
        pathMatch:"full",
        redirectTo:"layout"
    },
        {
        path:'tcv',
        component: Layout,
        children:[
            {
                path:'dashboards',
                component: Dashboards,
                canActivate:[ RouteGuard],
                data:{
                    expectedRole :['admin','user']
                }
            }
            
        ]
    }
];
