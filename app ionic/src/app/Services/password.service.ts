import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'http://localhost:8080/api/passwords';

  constructor(private http: HttpClient) { }

  generatePassword(config:generatePasswordConfig): Observable<any> {
    console.log(config);

    return this.http.post(`${this.apiUrl}/generate-password`, config);
  }

  getPasswordHistory(){
    return this.http.get(`${this.apiUrl}/password-history`);
  }
}


export class generatePasswordConfig{
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSpecial: boolean;
}