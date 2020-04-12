import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../interface/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public errorMsg :string;
  constructor(private authService: AuthService, private userServices: UserService, private router: Router) { }

  onSignup(f:NgForm){
    let data:User = f.value;
    this.authService.signup(data.email,data.password).then((result) => {
      this.errorMsg=null;
      this.userServices.addNewUser(result.user.uid, data.name,data.address).then((result)=>{
        this.router.navigate(['/'])
      })
      .catch(err=>{
        console.log('register user data (firestore)', err.message);
      })
    }).catch((err) => {    
      this.errorMsg = err.message;
    });
  }

}
