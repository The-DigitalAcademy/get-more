import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private orderHistory: string[] = [];
  

  constructor(private http: HttpClient) { }



}