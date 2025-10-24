import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  private apiUrl = 'https://habitstracker-api-8g6h.onrender.com/reports';

  constructor(private http: HttpClient) {}

  createReport(reportData: any): Observable<any> {
    return this.http.post(this.apiUrl, reportData);
  }
}
