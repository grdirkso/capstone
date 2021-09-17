import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Classes } from '../models/classes.model';
import { ClassesService } from '../services/classes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  classes: Classes[];
  selectedClass: Classes;
  display = false;
  gradeSelection;
  selectedGrades;
  classTypes;
  selectedClassType;
  statusSelection;
  items: MenuItem[];

  editForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    classType: ['', Validators.required],
    grades: ['', Validators.required],
    teacherName: ['', Validators.required],
    teacherEmail: ['', [Validators.required, Validators.email]],
    teacherPhone: ['', Validators.required],
    status: ['', Validators.required],
    groupSize: ['', Validators.required],
  });


  constructor(
    private classesService: ClassesService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getClasses();
    this.gradeSelection = [
      {name: '1', code: '1'},
      {name: '2', code: '2'},
      {name: '3', code: '3'},
      {name: '4', code: '4'},
      {name: '5', code: '5'},
      {name: '6', code: '6'},
      {name: '7', code:  '7'},
      {name: '8', code: '8'}
    ];
    this.classTypes = [
      {label: 'Block-Based Coding', value: 'Block-Based Coding'},
      {label: 'Text-Based Coding', value: 'Text-Based Coding'},
      {label: 'Advanced Coding and Creation', value: 'Advanced Coding and Creation' }
    ];
    this.statusSelection = [
      {label: 'Inactive', value: 'inactive'},
      {label: 'Active', value: 'active'},
      {label: 'In Review', value: 'in review'}
    ];
    this.items = [
      {label: 'Home', routerLink: '/home'},
      {label: 'Admin Portal'}
    ];
  }


  getClasses() {
    this.classesService.getClasses().subscribe(classes => {
      this.classes = classes;
    });
  }

  mapFormToClass(): Classes {
    return {
      GroupId: this.selectedClass.GroupId,
      GroupName: this.editForm.get('name').value,
      OrganizationName: this.editForm.get('classType').value,
      AgeGroup: this.editForm.get('grades').value,
      TeacherName: this.editForm.get('teacherName').value,
      TeacherEmail: this.editForm.get('teacherEmail').value,
      TeacherPhone: this.editForm.get('teacherPhone').value,
      Status: this.editForm.get('status').value,
      MaxGroupSize: this.editForm.get('groupSize').value
    };
  }

  editClass(selectedClass: Classes) {
    this.display = true;
    this.selectedClass = selectedClass;
    this.editForm.setValue({
      name: selectedClass.GroupName,
      classType: selectedClass.OrganizationName,
      grades: selectedClass.AgeGroup,
      teacherName: selectedClass.TeacherName,
      teacherEmail: selectedClass.TeacherEmail,
      teacherPhone: selectedClass.TeacherPhone,
      status: selectedClass.Status,
      groupSize: selectedClass.MaxGroupSize
    });
  }

  editSubmission() {
    let updatedClass: Classes;
    if (this.editForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid Form',
        detail: 'All fields must be filled out'
      });
    } else if (this.editForm.pristine) {
      this.messageService.add({
        severity: 'info',
        summary: 'No Changes',
        detail: `No changes have been made to class ${this.selectedClass.GroupName}`
      });
    } else {
      updatedClass = this.mapFormToClass();
      this.classesService.editClass(updatedClass).subscribe(
        selectedClass => {
          this.messageService.add({
            severity: 'success',
            summary: 'Class Updated',
            detail: `The ${this.selectedClass.GroupName} has been updated`
          });
          this.display = false;
          this.getClasses();
        },
        error => {
          this.messageService.add({
            severity: 'error',
            summary: 'OOPS',
            detail: `Something went wrong!`
          });
        }
      );
    }
  }

  deleteClass() {
    this.classesService.deleteClass(this.selectedClass.GroupId).subscribe(
      selectedClass => {
        this.display = false;
        this.getClasses();
        this.messageService.add({
          severity: 'success',
          summary: 'Class Deleted',
          detail: `The ${this.selectedClass.GroupName} has been deleted`
        });
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'OOPS',
          detail: `Something went wrong!`
        });
      }
    );
  }

  viewStudents(selectedClass: Classes) {
    this.router.navigate(['admin/students/', selectedClass.GroupId]);
  }
}
