import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UploadListComponent } from './upload-file/upload-list/upload-list.component';
import { UploadFormComponent } from './upload-file/upload-form/upload-form.component';
import { UploadDetailsComponent } from './upload-file/upload-details/upload-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/register-student', pathMatch: 'full' },
  { path: 'register-student', component: AddStudentComponent },
  { path: 'view-students', component: StudentListComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  
  { path: 'file-list', component: UploadListComponent },
  { path: 'file-form', component: UploadFormComponent},
  { path: 'file-list/:id', component: UploadDetailsComponent}
];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }