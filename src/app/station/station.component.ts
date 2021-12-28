import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StationService } from './station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  filterControl: FormControl = new FormControl('Prenosni odnos');
  toggleDropdown1: boolean = false;
  from: string = "";
  toggleDropdown2: boolean = false;
  to: string = "";
  toggleDropdown: boolean = false;
  stations: any[] = [];
  constructor(private stationService: StationService) { }
  
  durationInSeconds: number = 0; 

  ngOnInit(): void {
  }
 
 
  search(event:any){
    this.stationService.searchByStationName(event.target.value)
                       .subscribe(data => { 
                         console.log(data);
                         this.stations = data;
                        this.toggleDropdown = !this.toggleDropdown;}
    );
  }

  getTime():any{
    this.stationService.getTimeNeeded("Geneve","Basel")
                       .subscribe(data =>{
                        console.log(data);
                        this.durationInSeconds=data;}
                        );
    }
  removeList1(val:any){
    this.from = val;
    this.toggleDropdown1 = false;
    this.toggleDropdown = false;
  }
  removeList2(val:any){
    this.to = val;
    this.toggleDropdown2 = false;
    this.toggleDropdown = false;
  }
}

