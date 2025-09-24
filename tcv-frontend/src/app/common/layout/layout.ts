import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { Signup } from '../../signup/signup';
import { ForgotPassword } from '../../forgot-password/forgot-password';
// import { Login } from '../../login/login';
import { User} from '../../services/user'
import { response } from 'express';
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
  private dialog: MatDialog,
  private router: Router,
  private userService : User
 ){}
  toggleSidebar(){
    this.showSidebar = this.showSidebar? false : true;
  }
 
  ngOnInit(){
    this.oberser.observe([Breakpoints.Handset]).subscribe(result=>{
      // console.log("result", result);
      this.isMobile = result.matches;
    });
if (typeof window !== 'undefined' && localStorage) {
    const token =localStorage.getItem('token');
    console.log(token);
    if(token != null){
      this.userService.checkToken().subscribe((response:any)=>{
        this.router.navigate(['/dashboards']);
      },(error:any)=>{
        
        console.log(error);
      })
    }else {
      this.router.navigate(['/']);
    }
  }
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
  // loginAction(){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.width ="550px";
  //   this.dialog.open(Login,dialogConfig)
  // }
}
