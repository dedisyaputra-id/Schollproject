import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class User {
  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.url, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
