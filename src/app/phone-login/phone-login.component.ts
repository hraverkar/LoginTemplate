import { Component, OnInit } from '@angular/core';
import { WindowService } from '../services/window.service';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  windowRef: any;
  user: any;
  verificationCode: string;
  errorMsg: string;
  constructor(
    private winService: WindowService,
    private userServices: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.windowRef = this.winService.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container'
    );
    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode(f: NgForm) {
    let data: any = f.value;
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.gete164(data);
    firebase
      .auth()
      .signInWithPhoneNumber(num, appVerifier)
      .then((result) => {
        this.windowRef.confirmationResult = result;
      })
      .catch((error) => console.log(error));
  }

  gete164(data) {
    const num = data.country + data.firsthalf + data.Secondhalf;
    return `+${num}`;
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then((result) => {
        this.errorMsg = null;
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.errorMsg = err.message;
        console.log(err);
      });
  }
}
