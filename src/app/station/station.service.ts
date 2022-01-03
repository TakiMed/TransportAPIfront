import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class StationService{
  
    constructor(private httpClient: HttpClient){}
    
    private getHeaders(): HttpHeaders{
        const httpHeaders  = new HttpHeaders();
        httpHeaders.set('Access-Control-Allow-Origin','*');
        httpHeaders.set('Access-Control-Allow-Methods','GET');
        httpHeaders.set('Content-Type','application/json');
        return httpHeaders;
    }
    
    getTimeNeeded(station1: string, station2: string): Observable<number>{
        const apiUrl = `${environment.apiUrl}/getDuration?from=${station1}&to=${station2}`;
        return this.httpClient.get<number>(
            apiUrl, {headers: this.getHeaders() }
        );
    }

    searchByStationName(name:string):Observable<string[]>{
        const apiUrl = `${environment.apiUrl}/locations?input=${name}`;
        console.log(apiUrl);
        return this.httpClient.get<string[]>(
            apiUrl, {headers: this.getHeaders() }
        );
    }


}