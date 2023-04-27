import { Injectable, Output, EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { user } from "./user";

@Injectable({
    providedIn:'root'
})
export class ApiService{
    baseurl: string = "http://localhost/angular/php";
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    constructor(private httpClient: HttpClient){ }
    public userlogin( email:any, password:any){
        return this.httpClient.post<any>(this.baseurl + "/login.php", {email, password})
        .pipe(map(user => {

            this.setToken(user.email);
            this.getLoggedInName.emit(true);
            return user;
        }));
    }

    private setToken(token: string): void {
        localStorage.setItem('token', token);
    }
    isLoggedIn(): boolean {
        return !!this.getToken();
      }
    
    getToken(): string | null {
        return localStorage.getItem('token');
      }
      logout(): void {
        localStorage.removeItem('token');
      }
}
