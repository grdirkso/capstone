import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClassSubmissionComponent } from './class-submission/class-submission.component';
import { ClassesComponent } from './classes/classes.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const fallbackRoute: Route = {
  path:'**', component: HomeComponent
}

const routes: Routes = [
{
  path: '',
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'classes', component: ClassesComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'class-submission', component: ClassSubmissionComponent},
    {path: 'admin', component: AdminComponent},
    fallbackRoute

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
