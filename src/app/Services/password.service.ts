import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'https://localhost:7125/api/password';

  constructor(private http: HttpClient) { }

  generatePassword(length: number, includeUpperCase: boolean, includeLowercase: boolean, includeNumbers: boolean, includeSpecialCharacters: boolean): Observable<any> {
    let params = new HttpParams()
      .set('length', length.toString())
      .set('includeUpperCase', includeUpperCase.toString())
      .set('includeLowercase', includeLowercase.toString())
      .set('includeNumbers', includeNumbers.toString())
      .set('includeSpecialCharacters', includeSpecialCharacters.toString());

    return this.http.post(`${this.apiUrl}/generate`, {}, { params });
  }
}
