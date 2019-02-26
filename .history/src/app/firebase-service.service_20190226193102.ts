import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

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
