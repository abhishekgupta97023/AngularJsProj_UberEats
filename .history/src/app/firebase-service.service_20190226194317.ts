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

}
