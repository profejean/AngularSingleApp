import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LandingUs } from '../models/landing-us.model';

@Injectable({
  providedIn: 'root'
})
export class LandingUsService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsOne(id:number): Observable<LandingUs>{
    return this.http.get<LandingUs>(`${this.BASE_URL}/us/${id}`);
  }


  editUs(us:LandingUs, id:number): Observable<LandingUs>{
    const formData: FormData = new FormData();
    formData.append('us_img',us.us_img);
    formData.append('us_title',us.us_title);
    formData.append('us_text_uno',us.us_text_uno);
    formData.append('us_text_dos',us.us_text_dos);
 
    return this.http.put<LandingUs>(`${this.BASE_URL}/us/${id}`, formData);
  }
}

