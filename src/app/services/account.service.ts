import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountLogin } from '../commons/account-login';
import { JwtResponse } from './../commons/response/jwt-response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURL = "http://localhost:8001/api/auth";
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  authentication(accountLogin: AccountLogin): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.baseURL}`, accountLogin);
  }
  
}
