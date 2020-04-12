import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:Observable<firebase.User>;
  public userId:string;
  
  constructor(private angularFireAuth:AngularFireAuth) {
    //this.user = angularFireAuth.user;
    this.user = angularFireAuth.authState;
   }

   signup(email,password){
     return this.angularFireAuth.createUserWithEmailAndPassword(email,password);
   }

   login(email,password){
     return this.angularFireAuth.signInWithEmailAndPassword(email,password);
   }

   logout(){
     return this.angularFireAuth.signOut();
   }

   signInWithTwitter() {
     return this.angularFireAuth.signInWithPopup(
       new firebase.auth.TwitterAuthProvider()
     );
  }

  signInWithGithub(){
    return this.angularFireAuth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }

  signInWithGoogle(){
    return this.angularFireAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithFacebook(){
    return this.angularFireAuth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

}
