import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  baseUrl = 'https://localhost:5001/api/values';

  constructor(private http: HttpClient) { }

  query(model: string) {
    return this.http.get(this.baseUrl);
  }

}
