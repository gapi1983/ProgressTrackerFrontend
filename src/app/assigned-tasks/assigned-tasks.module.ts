import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AssignedTasksComponent } from './assigned-tasks.component';


const routes: Routes = [
  {path:'', component:AssignedTasksComponent}
]

@NgModule({
  declarations: [AssignedTasksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AssignedTasksModule { }
