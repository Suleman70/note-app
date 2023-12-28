import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-lesson.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModeService } from 'src/app/services/mode.service';



@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit  {

  ID:number = 0;

constructor(private route: ActivatedRoute, private router: Router, private dataS: DataService, private modeS: ModeService){}; 

  ngOnInit(){
    this.ID = this.modeS.getCurrentID();
  }

  OnYesButton(){
    this.modeS.changeCurrentID(0);
    this.router.navigate(["lesson-manage/"]);
    this.dataS.deleteNoteAPI(this.ID);
    this.dataS.deleteDrivingObject(this.ID);

  }

  OnNoButton(){


  }

 
}
