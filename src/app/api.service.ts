import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public getData() {
    var url = 'https://newsapi.org/v2/everything?' +
              'q=Gaming&' +
              'apiKey=45e6b004955e4d5e9672781ae04cec38';
    return this.httpClient.get(url).pipe(map(res => res.articles));
  }
  constructor(private httpClient: HttpClient) { }
}
