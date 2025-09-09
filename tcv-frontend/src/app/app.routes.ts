import { Routes } from '@angular/router';
import { Layout } from './common/layout/layout';

export const routes: Routes = [
    {
        path:'',
        pathMatch:"full",
        redirectTo:"layout"
    },
    {
        path:'layout',
        component: Layout
    }
];
