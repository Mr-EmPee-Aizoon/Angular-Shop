import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbURL = "http://localhost:8081/api/v1/";
  private user?:User;
  private token?:string;

  constructor(private httpClient:HttpClient) {
    let user = sessionStorage.getItem(USER_KEY);
    if(user) {
      this.user = User.fromJson(JSON.parse(user));
    }

    let token = sessionStorage.getItem(TOKEN_KEY);
    if(token) {
      this.token = token;
    }
  }

  login(username:string, password:string) {
    return this.httpClient.post<any>(this.dbURL + "login", {
      "username": username,
      "password": password
    }).subscribe(
      (data) => {
        this.user = User.fromJson(data.user);
        this.token = data.jwtToken;

        this.saveToken();
        this.saveUser();
      }
    );
  }

  logout() {
    this.user = undefined;
    this.token = undefined;

    this.deleteToken();
    this.deleteUser();
  }

  getUser() {
    return this.user;
  }

  getToken() {
    return this.token;
  }

  private saveToken() {
    this.deleteToken();
    window.sessionStorage.setItem(TOKEN_KEY, String(this.token));
  }

  private deleteToken() {
    window.sessionStorage.removeItem(TOKEN_KEY);
  }

  private saveUser() {
    this.deleteUser();
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(this.user));
  }

  private deleteUser() {
    window.sessionStorage.removeItem(USER_KEY);
  }

}
