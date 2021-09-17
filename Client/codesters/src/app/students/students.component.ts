import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Members } from '../models/members.model';
import { ClassesService } from '../services/classes.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Members[];
  display = false;
  selectedStudent: Members;
  classId: string;
  gradeSelection;
  items: MenuItem[];

  editForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    grade: ['', Validators.required]
  });
  constructor(
    private classesService: ClassesService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.classId = param['id'];
      this.getMembers(this.classId);
    });
    this.gradeSelection = [
      {label: '1', value: '1'},
      {label: '2', value: '2'},
      {label: '3', value: '3'},
      {label: '4', value: '4'},
      {label: '5', value: '5'},
      {label: '6', value: '6'},
      {label: '7', value: '7'},
      {label: '8', value: '8'}
    ];

    this.items = [
      {label: 'Home', routerLink: '/home'},
      {label: 'Admin Portal', routerLink: '/admin'},
      {label: 'Students'}
    ];
  }

  getMembers(id: string) {
    this.classesService.getClassById(id).subscribe(classes => {
      this.students = classes.Members;
    });
  }

  editStudent(student: Members) {
    this.selectedStudent = student;
    this.display = true;
    this.editForm.setValue({
      name: student.MemberName,
      phone: student.MemberPhone,
      email: student.MemberEmail,
      grade: student.MemberGrade
    });
  }

  mapFormToStudent(): Members {
    return {
      MemberId: this.selectedStudent.MemberId,
      MemberName: this.editForm.get('name').value,
      MemberPhone: this.editForm.get('phone').value,
      MemberEmail: this.editForm.get('email').value,
      MemberGrade: this.editForm.get('grade').value,
    };
  }

  editSubmission() {
    let updatedStudent: Members;
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
        detail: `No changes have been made to class ${this.selectedStudent.MemberName}`
      });
    } else {
      updatedStudent = this.mapFormToStudent();
      this.classesService.editMember(this.classId, updatedStudent).subscribe(
        selectedClass => {
          this.messageService.add({
            severity: 'success',
            summary: 'Student Updated',
            detail: `The ${this.selectedStudent.MemberName} has been updated`
          });
          this.display = false;
          this.getMembers(this.classId);
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

  deleteStudent() {
    this.classesService.deleteMember(this.classId, this.selectedStudent.MemberId).subscribe(
      selectedStudent => {
        this.display = false;
        this.getMembers(this.classId);
        this.messageService.add({
          severity: 'success',
          summary: 'Student Deleted',
          detail: `${this.selectedStudent.MemberName} has been deleted`
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
}
