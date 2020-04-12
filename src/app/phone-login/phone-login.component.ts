import { Component, OnInit } from '@angular/core';
import { WindowService } from '../services/window.service';
import * as firebase from 'firebase';

export class PhoneNumber {
  country: string;
  firsthalf:string;
  Secondhalf:string;


  get e164(){
    const num =this.country + this.firsthalf + this.Secondhalf;
    return `+${num}`;
  }
}

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  windowRef:any;
  phoneNumber = new PhoneNumber();
  user:any;
  verificationCode: string
  constructor(private winService:WindowService) { }

  ngOnInit(): void {
    this.windowRef = this.winService.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode(){
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num,appVerifier).then((result)=>{
      this.windowRef.confirmationResult = result;
    }).catch(error=>console.log(error));
  }

  varifyLoginCode(){
    this.windowRef.confirmationResult.confirm(this.verificationCode)
    .then((result)=>{
      this.user = result.user;
    }).catch(error=>console.log(error,"Incorrect code entered !! "));
  }
}
