import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LandingSlider } from '../models/landing-slider.model';


@Injectable({
  providedIn: 'root'
})
export class LandingSliderService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getLandingSlider(): Observable<LandingSlider[]>{
    return this.http.get<LandingSlider[]>(`${this.BASE_URL}/home`);
  }

  getLandingSliderOne(id:number): Observable<LandingSlider>{
    return this.http.get<LandingSlider>(`${this.BASE_URL}/home/${id}`);
  }

  createLandingSlider(landingSlider: LandingSlider): Observable<LandingSlider>{
    const formData: FormData = new FormData();
    formData.append('home_img',landingSlider.home_img);
    formData.append('home_title',landingSlider.home_title);
    formData.append('home_description',landingSlider.home_description);
    return this.http.post<LandingSlider>(`${this.BASE_URL}/home`, formData);
  }

  deleteLandingSlider(id: number): Observable<LandingSlider>{
    return this.http.delete<LandingSlider>(`${this.BASE_URL}/home/${id}`);
  }

  editLandingSlider(landingSlider:LandingSlider, id:number): Observable<LandingSlider>{
    const formData: FormData = new FormData();
    formData.append('home_img',landingSlider.home_img);
    formData.append('home_title',landingSlider.home_title);
    formData.append('home_description',landingSlider.home_description);
    return this.http.put<LandingSlider>(`${this.BASE_URL}/home/${id}`, formData);
  }
}
