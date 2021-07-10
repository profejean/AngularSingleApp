import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LandingPlate } from '../models/landing-plate.model';


@Injectable({
  providedIn: 'root'
})
export class LandingPlateService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMenu(): Observable<LandingPlate[]>{
    return this.http.get<LandingPlate[]>(`${this.BASE_URL}/menu`);
  }

  getMenuOne(id:number): Observable<LandingPlate>{
    return this.http.get<LandingPlate>(`${this.BASE_URL}/menu/${id}`);
  }

  createMenu(landingPlate: LandingPlate): Observable<LandingPlate>{
    return this.http.post<LandingPlate>(`${this.BASE_URL}/Menu`, landingPlate);
  }

  deleteMenu(id: number): Observable<LandingPlate>{
    return this.http.delete<LandingPlate>(`${this.BASE_URL}/menu/${id}`);
  }

  editMenu(landingPlate:LandingPlate, id:number): Observable<LandingPlate>{
 
    return this.http.put<LandingPlate>(`${this.BASE_URL}/menu/${id}`, landingPlate);
  }
}
