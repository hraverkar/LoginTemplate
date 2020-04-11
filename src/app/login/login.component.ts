import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public errorMsg: string;

  constructor(private authService:AuthService, private router:Router) { }

 onLogin(from:NgForm){
   let data= from.value;
   
   this.authService.login(data.email,data.password).then((result) => {
     this.errorMsg=null;
     console.log(result);
     this.router.navigate(['/']);
   }).catch((err) => {
     this.errorMsg = err.message;
     console.log(err);
     
   });
 }

 signInWithTwitter() {
  return this.authService.signInWithTwitter().then((result) => {
    this.errorMsg=null;
     console.log(result);
     this.router.navigate(['/']);
   }).catch((err) => {
     this.errorMsg = err.message;
     console.log(err);
   }
  )
}

signInWithGithub(){
  return this.authService.signInWithGithub().then((result) => {
    this.errorMsg=null;
     console.log(result);
     this.router.navigate(['/']);
   }).catch((err) => {
     this.errorMsg = err.message;
     console.log(err);
   }
  )
}
}
