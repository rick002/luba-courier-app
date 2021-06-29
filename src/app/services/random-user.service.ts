import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  constructor(
    private http: HttpClient,
  ) { }

  getRandomImage(): Observable<any> {
    return this.http.get<any>('https://randomuser.me/api/?gender=male');
  }


}
