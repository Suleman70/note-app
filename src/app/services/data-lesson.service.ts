import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { DrivingNote } from "../interfaces/DrivingNote";
import { Observable, Subject } from "rxjs";
import { map, catchError, tap} from 'rxjs/operators';
import { DrivingNoteToAddDto } from "../interfaces/DrivingNoteToAddDto";



@Injectable({providedIn: 'root'})
export class DataService{
        
    DummyItemData : DrivingNote[] =[{
    
        "id": 1,  
        "date":new Date('December 1, 2023'),
        "day": "monday",
        "time": "4pm",
        "trainingType": "ADI PART 1",
        "topic": "Turns",
        "carModel":'Honda',
        "instructor": "Bob",
        "weather": "Sunny",
        "lessonHours":19,
        "noteDetails": "This is note 1",
        "cost": 34
      
      },
      {
        "id": 2,  
        "date":new Date('December 1, 2023'),
        "day": "monday",
        "time": "4pm",
        "trainingType": "ADI PART 1",
        "topic": "Roundabouts",
        "carModel":'Honda',
        "instructor": "Bob",
        "weather": "Windy",
        "lessonHours":19,
        "noteDetails": "This is note 1",
        "cost": 234
      },
      {
        "id": 3,  
        "date":new Date('December 1, 2023'),
        "day": "monday",
        "time": "4pm",
        "trainingType": "ADI PART 1",
        "topic": "Mock Test",
        "carModel":'Honda',
        "instructor": "Bob",
        "weather": "Sunny",
        "lessonHours":19,
        "noteDetails": "This is note 2",
        "cost": 2
      },
      {
        "id": 4,  
        "date":new Date('December 1, 2023'),
        "day": "monday",
        "time": "4pm",
        "trainingType": "ADI PART 1",
        "topic": "Parking",
        "carModel":'Honda',
        "instructor": "Bob",
        "weather": "Winter",
        "lessonHours":19,
        "noteDetails": "This is note 3",
        "cost": 234
      },
     
      
      ];
    

    private drivingNotes: DrivingNote[] = [];  
    drivingObjectsChanged = new Subject<DrivingNote[]>;


    constructor(private http: HttpClient){

    }


   setDrivingNotes(drivingNotes: DrivingNote[]) {
      this.drivingNotes = drivingNotes;
      this.drivingObjectsChanged.next(this.drivingNotes.slice());
    }
  

    getDrivingNotes(): DrivingNote[]{  
     
      return this.drivingNotes.slice();
    }

      

    fetchNotes(): Observable<DrivingNote[]> {
      return this.http
        .get<DrivingNote[]>(
          'http://localhost:8080/notes'
        ).pipe(tap (data => {
          this.setDrivingNotes(data);
        }))
    }

    storeEditNotes(note: DrivingNote): void {
      this.http
        .put(
          'http://localhost:8080/note',
          note
        )
        .subscribe(response => {
          console.log(response);
        });
    }

    storeNewNote(note: DrivingNoteToAddDto): Observable<DrivingNote> {
      return this.http
        .post<DrivingNote>(
          'http://localhost:8080/note',
          note
        )
    }

    deleteNoteAPI(id: number): void {
      this.http
        .delete<DrivingNote>(
          'http://localhost:8080/note/' + id,
        )
        .subscribe();

    }
  

    

    getNoteById(findID: number): string | null{
        let found: string | undefined; 
        console.log("doung..");
        for(let i = 0; i<this.drivingNotes.length; i++){
          if(this.drivingNotes[i].id == findID){
            return this.drivingNotes[i].noteDetails;
          }
        }

        return null;
        
    }


    updateLessonNote(findID: number, updatedNote: string){
      console.log(findID,updatedNote)
      for(let i = 0; i<this.drivingNotes.length; i++){
        if(this.drivingNotes[i].id == findID){
          console.log("DOING")
          this.drivingNotes[i].noteDetails = updatedNote;
          console.log(this.drivingNotes[i]);
          this.storeEditNotes(this.drivingNotes[i]);
          this.drivingObjectsChanged.next(this.drivingNotes.slice());
          console.log("found");
        }
      }



      console.log(this.DummyItemData);
    }

    getObjectById(findID: number): DrivingNote | null{

      for(let i = 0; i<this.drivingNotes.length; i++){
        if(this.drivingNotes[i].id == findID){
          return this.drivingNotes[i];
        }
      }
      
      return null;
  }

  updateDrivingObject(findID: number, newData: DrivingNote){
    for(let i = 0; i<this.drivingNotes.length; i++){
      if(this.drivingNotes[i].id == findID){
        this.drivingNotes[i] = newData;
      }
    }
    this.drivingObjectsChanged.next(this.drivingNotes.slice());
    console.log(this.drivingNotes);
    
  }

  deleteDrivingObject(findID: number){
    console.log(findID);
    for(let i = 0; i<this.drivingNotes.length; i++){
      if(this.drivingNotes[i].id == findID){
        this.drivingNotes.splice(i,1);
      }
    }
    this.drivingObjectsChanged.next(this.drivingNotes.slice());
    console.log(this.drivingNotes);
    
  }

  addDrivingObject(newData: DrivingNote){
    this.drivingNotes.push(newData);
    this.drivingObjectsChanged.next(this.drivingNotes.slice());
    console.log(this.drivingNotes);
    
  }

  getTotalHours(){

    console.log("STARTING");
    let total = 0;
    console.log("INITIAL " + total);
    this.getDrivingNotes().forEach( i => {
      console.log(i.lessonHours);
      total = +total + +i.lessonHours;
    });
    console.log("FINAL " +total);
    return total
    
}

getTotalCost(){

  console.log("STARTING");
  let total = 0;
  console.log("INITIAL " + total);
  this.getDrivingNotes().forEach( i => {
    console.log(i.cost);
    total = +total + +i.cost;
  });
  console.log("FINAL " +total);
  return total
  
}

  




    
}
