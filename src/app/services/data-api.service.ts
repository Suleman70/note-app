import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { DrivingNote } from "../interfaces/DrivingNote";

@Injectable({providedIn: 'root'})
export class DataStorageService{

    constructor(private http: HttpClient){
        this.fetchPost();
        console.log("SASDASD");
    }

    


    fetchPost(){
       console.log("Hello");
       this.http
        .get<{[key: number]: DrivingNote}>('http://localhost:8080/notes')
        .subscribe(responseData => {
            console.log(responseData)
        });

    }
}
