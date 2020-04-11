import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestoreService:AngularFirestore) { }
  addNewUser(id:string, name:string, address:string){
    return this.firestoreService.doc('users/'+id).set({name, address});
  }

}
