import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { EventModel } from '../models/event';

const API = environment.ApiUrl;

export interface ApiEventModel {
  message: string,
  status: string,
  data: EventModel[]
}

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) {}

  search(search:string): Observable<ApiEventModel> {
    return this.http.post<ApiEventModel>(API + '/search', {"categoria" : search, "name" : search});
  }

}
