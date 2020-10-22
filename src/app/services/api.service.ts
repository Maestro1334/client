import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:4200/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<any> {
    return this.http.get(`${baseUrl}/companies`);
  }

  getCompanyById(id): Observable<any> {
    return this.http.get(`${baseUrl}/companies/${id}`);
  }

  getVacanciesByCompanyId(id): Observable<any> {
    return this.http.get(`${baseUrl}/vacancies/${id}`);
  }

  getAllVacancies(): Observable<any> {
    return this.http.get(`${baseUrl}/vacancies`);
  }
}
