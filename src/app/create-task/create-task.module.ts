import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task.component';

const routes: Routes = [
  {path:'', component:CreateTaskComponent}
]

@NgModule({
  declarations: [CreateTaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateTaskModule { }
