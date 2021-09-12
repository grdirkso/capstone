import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items;
  display: boolean = true;
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {label: 'Home', link: 'home'},
      {label: 'Classes', link: 'classes'},
      {label: 'Registration', link: 'registration'},
      {label: 'Class Idea Submission', link: 'class-submission'},
    ];
  }

}
