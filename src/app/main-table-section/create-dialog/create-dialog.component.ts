import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DrivingNote } from 'src/app/interfaces/DrivingNote';
import { DataService } from 'src/app/services/data-lesson.service';
import { ModeService } from 'src/app/services/mode.service';
import { NgForm } from '@angular/forms';
import { DrivingNoteToAddDto } from 'src/app/interfaces/DrivingNoteToAddDto';



@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {
  ID:number = 0;
  title: string;
  editMode: boolean;
  test: DrivingNote;
  date:string = "";
  lessonHours:number = 0;
  carModel:string = "";
  hours:string = "";
  note:string = "";
  drivingFormGroup: FormGroup;
  weatherTypes: string[] = ["Dry","Icy","Foggy","Rainy"]
  lessonTypes: string[] = ["Student Lesson","ADI Part 1","ADI Part 2","ADI Part 3","Other"]
  timeZones: string[] = ["","ADI Part 1","ADI Part 2","ADI Part 3","Other"]



  
  
  
  
  //Router does not work with Dialogs
  constructor( private modeS: ModeService,private dataS: DataService,private route: ActivatedRoute, private router: Router){

    this.drivingFormGroup = new FormGroup({date: new FormControl(new Date(), Validators.required),
       model: new FormControl(null, Validators.required),
       hours: new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
       time: new FormControl(null,Validators.required),
       topic: new FormControl(null,Validators.required),
       trainingType: new FormControl(null,Validators.required),
       instructor: new FormControl(null,Validators.required),
       weather: new FormControl(null,Validators.required),
       cost: new FormControl(null,Validators.required),
       noteDetails: new FormControl(null), //No field for this, just so that we fill all data from the driving object
      

    }
    );

    this.title = "Adding";
    this.editMode = false;
    this.test = new DrivingNote(0,new Date, "","","","","","","",0,0,"");
  
  }

  ngOnInit(){
  
    this.ID = this.modeS.getCurrentID();
    console.log(this.ID);
    console.log(this.modeS.getIsEditing());
    this.editMode = this.modeS.getIsEditing();
    

    if(this.editMode == true){
      this.title= "Editing ID:" +  this.ID;
      let data = this.dataS.getObjectById(this.ID);
      if(data !== null){
        this.drivingFormGroup.patchValue({
          'date':  data.date,
          'time':  data.time,
          'topic':  data.topic,
          'trainingType':  data.trainingType,
          'instructor':  data.instructor,
          'weather':  data.weather,
          'model': data.carModel,
          'hours': data.lessonHours,
          'cost': data.cost,
          'noteDetails': data.noteDetails
      })
      console.log(data.weather)
      this.drivingFormGroup.get("weatherData")?.setValue(data.weather)
     
    }
    else{
      this.title= "Adding New";
    }

  }
}



  onSubmit(){
  

    console.log("I have been submitted");
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let date: Date = this.drivingFormGroup.get('date')?.value;
    let model = this.drivingFormGroup.get('model')?.value;
    console.log(date);
    let day = weekday[new Date(date).getDay()];
    let time = this.drivingFormGroup.get('time')?.value;
    let trainingType = this.drivingFormGroup.get('trainingType')?.value;
    let weather = this.drivingFormGroup.get('weather')?.value;;
    let instructor = this.drivingFormGroup.get('instructor')?.value;;
    let hours = this.drivingFormGroup.get('hours')?.value;
    let notes = this.drivingFormGroup.get('noteDetails')?.value;
    let cost = this.drivingFormGroup.get('cost')?.value;
    let topic = this.drivingFormGroup.get('topic')?.value;

    console.log("WTH?");
    console.log("I am" + weather);

    if(this.editMode){
      let updateDate:DrivingNote = new DrivingNote(this.ID,date,day,time,trainingType,topic,model,instructor,weather,hours,cost,notes);
      console.log("I am on edit mode")
      console.log(updateDate);
      this.dataS.storeEditNotes(updateDate);
      this.dataS.updateDrivingObject(this.ID,updateDate);
    }
    else{
      console.log("I am on add mode")
      let newNote:DrivingNoteToAddDto = new DrivingNoteToAddDto(date,day,time,trainingType,topic,model,instructor,weather,hours,cost,notes);
      this.dataS.storeNewNote(newNote).subscribe( data =>{
        this.dataS.addDrivingObject(data);
      });
      
    }

    this.router.navigate(["lesson-manage/" + this.ID]);

    
  }



  

}
