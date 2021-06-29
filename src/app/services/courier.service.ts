import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourierService {
 
  constructor(private http: HttpClient) { }

  getPendingPackages(username: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.set('username', username);
    return this.http.get<any>('/api/packages/getPending', { params });
  }

  login(credentials): Observable<any> {
    return this.http.post<any>('/api/membership/login', credentials);
  }
  
}
