import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationtrial',
  templateUrl: './navigationtrial.component.html',
  styleUrls: ['./navigationtrial.component.css']
})
export class NavigationtrialComponent implements OnInit {

  constructor() {
    function openNav() {
      document.getElementById( 'mySidenav').style.width = '250px';
    }
    /* Set the width of the side navigation to 0 */
    function closeNav() {
      document.getElementById('mySidenav').style.width = '0';
    }
  }

  ngOnInit() {

  }


}
