import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tripinfo } from '../Model/tripinfo';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private tripData: string;
  constructor(private http: HttpClient) { 
    this.tripData = 'http://ec2-13-232-2-105.ap-south-1.compute.amazonaws.com:8079/trips/getTripInfo';
  }

  public findAll(): Observable<Tripinfo[]> {
    return this.http.get<Tripinfo[]>(this.tripData);
  }
}
