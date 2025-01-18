import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './models/register-model';
import { environment } from 'src/environments/environment';
import { Login } from './models/login';
import { ResetPasswordDto } from './models/resetPassword';
import { ForgotPasswordDto } from './models/forgotPassword';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  baseUrl = 'https://localhost:7225/api/Auth';

  register(model:Register){
    return this.http.post(`https://localhost:7225/api/Auth/register`,model);
  }

  login(model:Login){
    return this.http.post(`https://localhost:7225/api/Auth/login`,model);
  }
  resetPassword(model:ResetPasswordDto){
    return this.http.post(`${this.baseUrl}/reset-password`, model);
  }
  forgotPassword(email:string){
    return this.http.post(`https://localhost:7225/api/Auth/forgot-password/${email}`,{});
  }
}
