import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Device } from '../../models/device';



const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(API + '/devices');
  }

  postDevice(device: Device): Observable<Device> {
    return this.http.post<Device>(API + '/devices', device);
  }

  deleteDevice(deviceId: number) {
    return this.http.delete(API + `/devices/${deviceId}`);
  }

}
