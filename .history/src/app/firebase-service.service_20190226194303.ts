import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  ref = firebase.firestore().collection('UberUsers');

  constructor() { }

  createUser(value, avatar){
    return this.db.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age),
      avatar: avatar
    });
  }
}
