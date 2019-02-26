import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule, MatFormFieldBase} from '@angular/material/form-field';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { FirebaseServiceService } from '../firebase-service.service';


@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  displayedColumns = ['title', 'description', 'author'];
dataSource = new BoardDataSource(this.fs);


  constructor(private fs: FirebaseServiceService) { }

  ngOnInit() {
  }

}
