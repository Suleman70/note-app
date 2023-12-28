import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-lesson.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModeService } from 'src/app/services/mode.service';


@Component({
  selector: 'app-save-note-confirm-dialog',
  templateUrl: './save-note-confirm-dialog.component.html',
  styleUrls: ['./save-note-confirm-dialog.component.css']
})
export class SaveNoteConfirmDialogComponent {

  ID:number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private dataS: DataService, private modeS: ModeService){}; 

  ngOnInit(){
    this.ID = this.modeS.getCurrentID();
  }

  OnYesButton(){
    this.dataS.getNoteById(this.ID);
    this.dataS.updateLessonNote(this.ID, this.modeS.getLessonNote())
  }

}
