import { Injectable } from '@angular/core';

export interface Menu{
    state:string;
    name:string;
    icon:string;
    role:string;
}

const MENUITEMS: Menu[]= [
    { state:'dashboards', name:'Dashboards', icon:'dashboards', role:''}
]

@Injectable()

export class MenuItems{
    getMenuItem():Menu[]{
        return MENUITEMS;
    }
}

