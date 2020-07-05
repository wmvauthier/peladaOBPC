import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public url = 'https://obpc-system.herokuapp.com';
  // public url = 'localhost:3000';

  get(endpoint, params) {
    var url = `${this.url}/${endpoint}${this.patternParams(params)}`;
    return this.http.get<any>(url);
  }

  post(endpoint, params) {
    return this.http.post<any>(`${this.url}/${endpoint}`, [params]);
  }

  patternParams(params) {
    let str = '';
    params.forEach(element => {
      str = `${str}/${element}`
    });
    return str;
  }

}