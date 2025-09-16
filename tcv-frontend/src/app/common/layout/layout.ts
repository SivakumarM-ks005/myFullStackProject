import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { Signup } from '../../signup/signup';
import { ForgotPassword } from '../../forgot-password/forgot-password';
@Component({
  selector: 'app-layout',
  imports: [
    MatIconModule, 
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet,
    
],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  isMobile = false
  showSidebar = true;
constructor( 
  private oberser: BreakpointObserver,
  private dialog: MatDialog
 ){}
  toggleSidebar(){
    this.showSidebar = this.showSidebar? false : true;
  }
  signupAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "700px";
    this.dialog.open(Signup, dialogConfig);
  }
  forgotPasswordAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width ="550px";
    this.dialog.open(ForgotPassword, dialogConfig);
  }
  ngOnInit(){
    this.oberser.observe([Breakpoints.Handset]).subscribe(result=>{
      // console.log("result", result);
      this.isMobile = result.matches;
    })
  }
}
