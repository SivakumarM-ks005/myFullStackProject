import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  imports: [
    MatIconModule, 
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet
],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  showSidebar = true;

  toggleSidebar(){
    this.showSidebar = this.showSidebar? false : true;
  }
}
