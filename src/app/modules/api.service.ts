import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _URL = "http://localhost:3000/api";
  constructor(private _http: HttpClient) { }
  public getUsers(){
    return this._http.get<Users[]>(`${this._URL}/enrol`);
  }
}
