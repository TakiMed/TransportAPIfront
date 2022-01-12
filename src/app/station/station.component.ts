import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StationService } from './station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  toggleDropdown1: boolean = false;
  from: string = "";
  toggleDropdown2: boolean = false;
  to: string = "";
  toggleDropdown: boolean = false;
  stations: any[] = [];
  durationInSeconds: any = ""; 
  constructor(private stationService: StationService) { }

  ngOnInit(): void {
  }
 
 
  search(event:any){
    this.stationService.searchByStationName(event.target.value)
                       .subscribe(data => {
                         if(event.target.id=="from"){
                           this.toggleDropdown1 = true;} else {this.toggleDropdown2 = true;}
                           this.stations = data;
                        }
    );
  }

  getTime(from: any, to: any):any{
    this.stationService.getTimeNeeded(from,to)
                       .subscribe(data =>{
                        console.log(data);
                        this.durationInSeconds=data;
                      }
                        );
    }
  reset(){
    this.from = "";
    this.to = "";
    this.durationInSeconds = "";
  }
  removeList1(val:any){
    this.from = val;
    this.toggleDropdown1 = false;
  }
  removeList2(val:any){
    this.to = val;
    this.toggleDropdown2 = false;
  }
}

