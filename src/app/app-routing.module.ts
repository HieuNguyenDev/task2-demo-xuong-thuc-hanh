import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path: '', component: NavComponent},
  {path: 'student-list', component: StudentListComponent},
  {path: 'student-add', component: StudentAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
