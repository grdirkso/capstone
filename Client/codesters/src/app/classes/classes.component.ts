import { Component, OnInit } from '@angular/core';
import { ClassTypes } from '../models/class-types.model';
import { Classes } from '../models/classes.model';
import { ClassTypesService } from '../services/class-types.service';
import { ClassesService } from '../services/classes.service';
import {FilterService} from 'primeng/api';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classes: Classes[];
  classesMaster: Classes[];
  classTypes: ClassTypes[];
  blockClasses: Classes[];
  textClasses: Classes[];
  advancedClasses: Classes[];
  statusFilter;
  selectedFilter;
  gradeFilter;
  selectedGrade;
  openSeatsFilter;
  selectedAvalability;

  constructor(
    private classesService: ClassesService,
    private classTypesService: ClassTypesService,
    private filterService: FilterService
  ) { 

    this.statusFilter = [
      {label: 'All Statuses', value: 'all'},
      {label: 'Inactive', value:'inactive'},
      {label: 'Active', value:'active'},
      {label: 'In Review', value:'inreview'}
    ];

    this.gradeFilter = [
      {label: 'All Grades', value: 'all'},
      {label: '1', value: '1'},
      {label: '2', value:'2'},
      {label: '3', value:'3'},
      {label: '4', value:'4'},
      {label: '5', value: '5'},
      {label: '6', value:'6'},
      {label: '7', value:'7'},
      {label: '8', value:'8'}
    ];
    
    this.openSeatsFilter = [
      {label: 'All', value: 'all'},
      {label: 'Open Seats', value: 'open'}
    ]
  }

  ngOnInit(): void {
    this.getClasses();
    this.getClassTypes();
  }

  getClasses() {
    this.classesService.getClasses().subscribe(classes => {
      this.classes = classes,
      this.classesMaster = classes,
      error => console.log(error),
      console.log(this.classes),
      this.splitClassesByType();
    });
  }

  getClassTypes() {
    this.classTypesService.getClassTypes().subscribe(classType => {
      this.classTypes = classType,
      error => console.log(error),
      console.log(this.classTypes);
    });
  }

  getBlockClasses() {
    this.blockClasses = this.classes.filter(classes => classes.OrganizationName === 'Block-Based Coding');
  }

  getTextClasses() {
    this.textClasses = this.classes.filter(classes => classes.OrganizationName === 'Text-Based Coding');
  }

  getAdvancedClasses() {
    this.advancedClasses = this.classes.filter(classes => classes.OrganizationName === 'Advanced Coding and Creation');
  }

  filterByStatus() {
    this.selectedGrade = null;
    this.selectedAvalability = null;
    if(this.selectedFilter != 'all') {
      this.classes = this.classesMaster;
      this.classes = this.classes.filter(element => element.Status === this.selectedFilter);
    } else if (this.selectedFilter === 'all') {
      console.log(this.classesMaster);
      this.classes = this.classesMaster;  
    }
    this.splitClassesByType(); 
  }

  filterByGrade() {
    this.selectedAvalability = null;
    this.selectedFilter = null;
    if(this.selectedGrade != 'all') {
      this.classes = this.classesMaster;
      this.classes = this.classes.filter(element => element.AgeGroup.includes(this.selectedGrade));
    } else if (this.selectedGrade === 'all') {
      this.classes = this.classesMaster;
    }

    this.splitClassesByType();
  } 

  filterbyAvailability() {
    this.selectedGrade = null;
    this.selectedFilter = null;
    if(this.selectedAvalability != 'all') {
      this.classes = this.classesMaster;
      this.classes = this.classes.filter(element => element.MaxGroupSize > element.Members.length);
    } else if (this.selectedAvalability === 'all') {
      this.classes = this.classesMaster;
    }
    this.splitClassesByType();
  }

  splitClassesByType() {
    this.getBlockClasses();
    this.getTextClasses();
    this.getAdvancedClasses()
  }
}
