import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { EventModel } from '../models/event';



const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

  search(categoria:string): Observable<EventModel[]> {
    return this.http.post<EventModel[]>(API + '/search', {"categoria" : categoria});
  }

}
