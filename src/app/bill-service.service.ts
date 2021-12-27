import { Bill } from './bill';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  private billsUrl: string;

  constructor(private http: HttpClient) {
    this.billsUrl = 'http://localhost:8080/api/v1/bills';
  }

  public findAll(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.billsUrl);
  }

  public save(user: Bill) {
    return this.http.post<Bill>(this.billsUrl, user);
  }
}