import { Routes } from '@angular/router';
import { Layout } from './common/layout/layout';
import { Dashboard } from './dashboard/dashboard'
import { RouteGuard } from './services/route-guard';

export const routes: Routes = [
    {
        path:'',
        pathMatch:"full",
        redirectTo:"layout"
    },
//      {
// path:'layout',
//                 component: Layout,
//     },
//     {
// path:'dashboard',
//                 component: Dashboard,
//     },
    {
        path:'tcv',
        component: Layout,
        children:[
            {
                path:'dashboard',
                component: Dashboard,
                canActivate:[ RouteGuard],
                data:{
                    expectedRole :['admin','user']
                }
            }
            
        ]
    }
];
