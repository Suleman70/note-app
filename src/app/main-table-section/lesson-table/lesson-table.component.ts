import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DrivingNote } from 'src/app/interfaces/DrivingNote';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/services/data-lesson.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { ModeService } from 'src/app/services/mode.service';
import { Subscription } from 'rxjs';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';



@Component({
  selector: 'app-lesson-table',
  templateUrl: './lesson-table.component.html',
  styleUrls: ['./lesson-table.component.css']
})
export class LessonTableComponent implements OnInit,OnDestroy {




  listOfLessons: DrivingNote[] = [];
  tableColumns: string[] = ['id','date', 'day','time','weather','trainingType' ,'topic','carModel','instructor','lessonHours','cost'];
  iD:number = 0;
  selectedRowIndex = 0;
  suscription: Subscription = new Subscription;
  dataSource = new MatTableDataSource<DrivingNote>();
  totalHours = 0;
  totalCost = 0;

  constructor(private route: ActivatedRoute, private router: Router, private dataS: DataService, private modeS: ModeService, public dialog: MatDialog){
  
  }

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  ngOnInit(): void{
    //Initial fetch, so that when u load it fetches the data. Only executes once
    this.dataS.fetchNotes().subscribe( data =>{
      console.log("A");
      this.listOfLessons = data;
      this.dataSource.data = data;
      this.dataS.setDrivingNotes(data);
      this.totalHours = this.dataS.getTotalHours();
      console.log(this.totalHours);

      this.totalCost = this.dataS.getTotalCost();
    })
    
    this.router.navigate(["lesson-manage/"]); //when refresh make sure we go back to id 0
    this.route.params.subscribe((params:Params) =>{
      this.iD = +params['id'];
      this.selectedRowIndex = +params['id'];
   
    })

    //How we keep getting updated data
    this.suscription = this.dataS.drivingObjectsChanged.subscribe((data: DrivingNote[]) =>{
      console.log("B");

      this.listOfLessons = data;
      this.dataSource.data = data;
      this.listOfLessons = data;
      this.totalHours = this.dataS.getTotalHours();
      console.log(this.totalHours);
      this.totalCost = this.dataS.getTotalCost();

    })

    this.dataSource.sort = this.sort;

   
  }

  
 onClickRow(row:DrivingNote,item:any){
  console.log("BEFORE", this.iD);
  this.router.navigate(["lesson-manage/" + row.id]);
  this.iD = row.id;
  this.selectedRowIndex = row.id;
}

onEditItem(){
  this.modeS.enableEditing();
  this.modeS.changeCurrentID(this.iD);
  console.log(this.modeS.getCurrentID());
  const dialogRefNew = this.dialog.open(CreateDialogComponent);
  dialogRefNew.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

onDelete(){
  const dialogRef = this.dialog.open(DeleteDialogComponent);
  this.modeS.changeCurrentID(this.iD);

  
  dialogRef.afterClosed().subscribe(result => {
    //this.router.navigate(["lesson-manage/"]);
    this.iD = this.modeS.getCurrentID();
    console.log(`Dialog result: ${result}`);
  });
}

onAddItem(){
  this.modeS.enableAdding();
  
  const dialogRefNew = this.dialog.open(CreateDialogComponent);
  dialogRefNew.afterClosed().subscribe(result => {
   
    console.log(`Dialog result: ${result}`);
  });
}

ngOnDestroy(): void {
  this.suscription.unsubscribe();
}
}




