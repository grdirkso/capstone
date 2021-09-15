import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Classes } from '../models/classes.model';
import { Members } from '../models/members.model';
import { ClassesService } from '../services/classes.service';
import {MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    member: Members;
    members: Members[];
    classes: Classes[];
    classList: Classes[];
    available: Classes[];
    grades;
    selectedGrade;
    availableClasses = [];
    selectedClass = {label: 'No available classes', value: '0'};
    display: boolean = false;
    inEdit: boolean = false;

    regForm: FormGroup = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      grade: ['', Validators.required],
      class: ['', Validators.required]
    });
    
  constructor(
    private fb: FormBuilder,
    private classesService: ClassesService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) { 

    this.grades = [
      {label: '1', value: '1'},
      {label: '2', value:'2'},
      {label: '3', value:'3'},
      {label: '4', value:'4'},
      {label: '5', value: '5'},
      {label: '6', value:'6'},
      {label: '7', value:'7'},
      {label: '8', value:'8'}
    ];

    this.availableClasses = [
      {label: 'No available classes', value: '0'}
    ];
  }

  ngOnInit(): void {
    this.getClasses();
  }

  submit() {
    if(this.regForm.valid) {
      this.member = this.mapFormToMember();
      this.classesService.addMember(this.regForm.get('class').value, this.member).subscribe();
      this.display = true;
      this.allMembers();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid Form',
        detail: 'All fields must be filled out'
      });
    }
    
  }

  mapFormToMember(): Members {
    return {
        MemberName: this.regForm.get('name').value,
        MemberEmail: this.regForm.get('email').value,
        MemberPhone: this.regForm.get('phone').value,
        MemberGrade: this.regForm.get('grade').value
    }
  }

  getClasses() {
    this.classesService.getClasses().subscribe(classes => {
      this.classes = classes,
      error => console.log(error);
    });
  }

  populateClassList() {
    this.availableClasses = [];
    this.classList = this.classes
                    .filter(c => c.AgeGroup.includes(this.regForm.get('grade').value))
                    .filter(c => c.Status === "active")
                    .filter(c => c.Members.length < c.MaxGroupSize);
    this.availableClasses = this.classList.map(element => element.GroupName);
    console.log(this.classList);
    if(this.availableClasses.length === 0) {
      this.availableClasses = [
        {label: 'No available classes', value: '0'}
      ];
    } 
  }

  allMembers() {
    this.classesService.getClassById(this.regForm.get('class').value).subscribe(c => {
     this.members = c.Members,
      error => console.log(error);
    });
  }

  routeHome(){
    this.router.navigate(['/home'], { relativeTo: this.route });
  }
}
