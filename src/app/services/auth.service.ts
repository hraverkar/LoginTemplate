import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:Observable<firebase.User>;
  public userId:string;
  
  constructor(private angularFireAuth:AngularFireAuth) {
    this.user = angularFireAuth.user;
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


}
