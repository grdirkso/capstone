import { Component, OnInit } from '@angular/core';
import { ClassTypes } from '../models/class-types.model';
import { ClassTypesService } from '../services/class-types.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  classTypes: ClassTypes[];
  constructor(
    private classTypesService: ClassTypesService
  ) { }

  ngOnInit(): void {
    this.getClassTypes();
  }

  getClassTypes() {
    this.classTypesService.getClassTypes().subscribe(classType => {
      this.classTypes = classType,
      error => console.log(error),
    });
  }
}
