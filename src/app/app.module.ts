import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTableSectionComponent } from './main-table-section/main-table-section.component';
import { LessonTableComponent } from './main-table-section/lesson-table/lesson-table.component';
import { LessonEditComponent } from './main-table-section/lesson-edit/lesson-edit.component';
import { LessonEditDefaultComponent } from './main-table-section/lesson-edit-default/lesson-edit-default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
 import {MatGridListModule} from '@angular/material/grid-list'; 
 import {MatInputModule} from '@angular/material/input';
 import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { DeleteDialogComponent } from './main-table-section/delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateDialogComponent } from './main-table-section/create-dialog/create-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material/core' 
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SaveNoteConfirmDialogComponent } from './main-table-section/save-note-confirm-dialog/save-note-confirm-dialog.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LogInDialogComponent } from './account-manage/log-in-dialog/log-in-dialog.component';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    MainTableSectionComponent,
    LessonTableComponent,
    LessonEditComponent,
    LessonEditDefaultComponent,
    DeleteDialogComponent,
    CreateDialogComponent,
    SaveNoteConfirmDialogComponent,
    MainNavComponent,
    LogInDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSortModule

  ],
  providers: [[
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],],
  bootstrap: [AppComponent]
})
export class AppModule { }
