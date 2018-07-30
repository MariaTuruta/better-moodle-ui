import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDetailsPageComponent, TeachersPageComponent } from './containers';

import { teacherRoutes } from './teachers.routes';

@NgModule({
  imports: [
    CommonModule,
    teacherRoutes
  ],
  declarations: [TeacherDetailsPageComponent, TeachersPageComponent]
})
export class TeachersModule { }