import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { FsService } from '../fs.service';


@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value){
    this.firebaseService.createUser(value, this.avatarLink)
    .then(
      res => {
        this.resetFields();
       // this.router.navigate(['/home']);
      }
    )
  }

}
