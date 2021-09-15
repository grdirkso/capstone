import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';



const routes: Routes = [
{
  path: '',
  children: [
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }