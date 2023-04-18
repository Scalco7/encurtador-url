import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, take} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  private url: string = "https://api-ssl.bitly.com/v4/shorten";

  public headers = new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: '9d5af0f8989cd8f1b26754bee39c2d211f2ee9e5'
  });
  public httpOptions = {
    headers: this.headers
  };

  constructor(
    private http: HttpClient
  ) { }

  public getLinkReduzido(urlAntiga: any): Observable<any>{
    return this.http.post<any>(this.url, urlAntiga, this.httpOptions)
  }
}
