import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Korm } from '../models/korm';

@Injectable({
  providedIn: 'root'
})
export class KormService {
  baseUrl = environment.apiUrl + "/korms";
  constructor(private http: HttpClient) { }

  all(): Observable<Korm[]> {
    return this.http.get<Korm[]>(this.baseUrl);
  }

  add(korm: Korm): Observable<Korm> {
    return this.http.post<Korm>(this.baseUrl, korm);
  }

  remove(kormId: number): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/remove/${kormId}`,{});
  }
}