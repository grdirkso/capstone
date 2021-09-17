import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { element } from 'protractor';
import { ClassTypes } from '../models/class-types.model';
import { Classes } from '../models/classes.model';
import { ClassTypesService } from '../services/class-types.service';
import { ClassesService } from '../services/classes.service';

@Component({
  selector: 'app-class-submission',
  templateUrl: './class-submission.component.html',
  styleUrls: ['./class-submission.component.css']
})

export class ClassSubmissionComponent implements OnInit {

  gradeSelection;
  selectedGrades;
  classTypes;
  selectedClassType;
  class: Classes;
  items: MenuItem[];

  submissionForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    classType: ['', Validators.required],
    grades: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private classesService: ClassesService,
    private classTypesService: ClassTypesService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.gradeSelection = [
      {name: '1', code: '1'},
      {name: '2', code: '2'},
      {name: '3', code: '3'},
      {name: '4', code: '4'},
      {name: '5', code: '5'},
      {name: '6', code: '6'},
      {name: '7', code: '7'},
      {name: '8', code: '8'}
    ];
   }

  ngOnInit(): void {
    this.getClassTypes();
    this.items = [
      {label: 'Home', routerLink: '/home'},
      {label: 'Class Idea Submission'}
    ];
  }

  mapFormToClass(): Classes{
    return {
      GroupName: this.submissionForm.get('name').value,
      OrganizationName: this.submissionForm.get('classType').value,
      AgeGroup: this.submissionForm.get('grades').value,
      TeacherName: 'TBD',
      TeacherEmail: 'TBD',
      TeacherPhone: 'TBD',
      Status: 'in review',
      MaxGroupSize: 5
    };
  }

  getClassTypes() {
    this.classTypesService.getClassTypes().subscribe(classType => {
      this.classTypes = classType.map(element => element.OrganizationName);
    });
  }

  submit() {
    if (this.submissionForm.valid) {
      this.class = this.mapFormToClass();
      this.classesService.addClass(this.class).subscribe(
        submission => {
          {
            this.messageService.add({
              severity: 'success',
              summary: 'Class Submitted',
              detail: `Class has been submitted for review`
            });
          }

          this.submissionForm.setValue({
            name: '',
            classType: '',
            grades: ''
          });
          this.submissionForm.markAsPristine();
          this.submissionForm.markAsUntouched();
        },
        error =>  {
          this.messageService.add({
            severity: 'error',
            summary: 'OOPS',
            detail: `Something went wrong!`
          });
        }
      );
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid Form',
        detail: 'All fields must be filled out'
      });
    }
  }
}
