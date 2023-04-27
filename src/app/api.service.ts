import { Injectable, Output, EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { user } from "./user";

@Injectable({
    providedIn:'root'
})
export class ApiService{
    baseurl: string = "http://localhost/angular/php";
    


    constructor(private httpClient: HttpClient){ }
    public userregistration(fullname:any, email:any, password:any){
        return this.httpClient.post<any>(this.baseurl + "/register.php", {fullname, email, password
        })
        .pipe(map(user =>{
            return user;
        }));
    }
    
}