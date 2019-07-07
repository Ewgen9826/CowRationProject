import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + "/auth";
  constructor(private http: HttpClient) { }

  all(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "/users");
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + "/register", user);
  }

  remove(userId: number): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/remove/${userId}`,{});
  }
}
