import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BookrideInfo } from '../bookride/bookride-Info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookrideService {

  private bookrideurl = 'http://ec2-13-232-2-105.ap-south-1.compute.amazonaws.com:8079/trips/bookride';

  constructor(private http: HttpClient) { }

  bookridemethod(info: BookrideInfo): Observable<string> {
    return this.http.post<string>(this.bookrideurl, info, httpOptions);
  }

}

