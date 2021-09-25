import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface User {
    alphanumeric: string;
    name:         string;
    phone:        string;
    email:        string;
    address:      string;
    list:         number | string;
    id:           number;
}
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  getUsers(options:any):Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:3000/users?_page=${options.page}&_limit=21`)
  }
}
