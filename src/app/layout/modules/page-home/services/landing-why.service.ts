import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LandingWhy } from '../models/landing-why.model';




@Injectable({
  providedIn: 'root'
})
export class LandingWhyService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getWhy(): Observable<LandingWhy[]>{
    return this.http.get<LandingWhy[]>(`${this.BASE_URL}/why`);
  }

  getWhyOne(id:number): Observable<LandingWhy>{
    return this.http.get<LandingWhy>(`${this.BASE_URL}/why/${id}`);
  }

  createWhy(landingWhy: LandingWhy): Observable<LandingWhy>{
    return this.http.post<LandingWhy>(`${this.BASE_URL}/why`, landingWhy);
  }

  deleteWhy(id: number): Observable<LandingWhy>{
    return this.http.delete<LandingWhy>(`${this.BASE_URL}/why/${id}`);
  }

  editWhy(landingWhy:LandingWhy, id:number): Observable<LandingWhy>{
 
    return this.http.put<LandingWhy>(`${this.BASE_URL}/why/${id}`, landingWhy);
  }
}
