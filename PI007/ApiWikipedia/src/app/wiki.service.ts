import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  baseUrl = 'https://commons.wikimedia.org/w/api.php';

  constructor(private http: HttpClient) {}

  search(term: string): Observable<any> {
    const params = {
      action: 'query',
      list: 'search',
      srsearch: term,
      format: 'json',
      origin: '*'
    };
    return this.http.get(this.baseUrl, { params });
  }
}
