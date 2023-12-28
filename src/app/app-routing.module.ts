import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTableSectionComponent } from './main-table-section/main-table-section.component';
import { LessonEditDefaultComponent } from './main-table-section/lesson-edit-default/lesson-edit-default.component';
import { LessonEditComponent } from './main-table-section/lesson-edit/lesson-edit.component';
import { CreateDialogComponent } from './main-table-section/create-dialog/create-dialog.component';

const routes: Routes = [

  {path: '', redirectTo: '/lesson-manage', pathMatch: "full"},
  {path: 'lesson-manage', component: MainTableSectionComponent, children :[
    {path: '', component: LessonEditDefaultComponent},
    {path: ':id', component: LessonEditComponent},
  
  ]},
  {path: 'order-edit/:id`', component: LessonEditComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule {


  
 }
