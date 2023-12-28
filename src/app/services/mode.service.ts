import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { DrivingNote } from "../interfaces/DrivingNote";

@Injectable({providedIn: 'root'})
export class ModeService{
        
    private isEditing: boolean = false;
    private currentID: number = -1;
    private lessonNote: string = "";

    enableEditing(){
        this.isEditing = true;
    }

    enableAdding(){
        this.isEditing = false;;
    }

    getIsEditing(){
        return this.isEditing;
    }

    changeCurrentID(id: number){
        this.currentID = id;
    }

    changeLessonNote(data: string){
        this.lessonNote = data;
    }

    getCurrentID(){
        return this.currentID;
    }

    getLessonNote(){
        return this.lessonNote;
    }

 }