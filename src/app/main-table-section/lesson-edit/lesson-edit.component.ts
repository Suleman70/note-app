import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/services/data-lesson.service';
import { MatDialog } from '@angular/material/dialog';
import { SaveNoteConfirmDialogComponent } from '../save-note-confirm-dialog/save-note-confirm-dialog.component';
import { ModeService } from 'src/app/services/mode.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css']
})
export class LessonEditComponent implements OnInit {


  iD: number = 0;
  lessonNote: string | null= "";
  control = new FormControl(null);

  constructor(private route: ActivatedRoute,  private dataS: DataService, public dialog: MatDialog,public modeS: ModeService){
    
  }
 
  ngOnInit(){
    this.route.params.subscribe((params:Params) =>{
      console.log("I should be changing");
      console.log(this.iD);
      console.log(this.lessonNote);
 

      console.log(this.dataS.getDrivingNotes().slice())
      if(this.lessonNote !== null || +params['id'] !== this.iD){
        this.iD = +params['id'];
        this.lessonNote = this.dataS.getNoteById(this.iD);
        console.log(this.lessonNote);
      }
     
    })


  }

  onSaveItem(){
    //this.modeS.changeLessonNote = this.lessonNote;
    const dialogRef = this.dialog.open(SaveNoteConfirmDialogComponent);
    this.modeS.changeCurrentID(this.iD);
    if(this.lessonNote !== null){
      this.modeS.changeLessonNote(this.lessonNote);
    }
      
    dialogRef.afterClosed().subscribe(result => {
      console.log("hlelo");
    })
  }


}
