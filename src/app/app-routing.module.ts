import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { GuardGuard } from "./guard.guard";

const routes: Routes = [
    {   path: 'register', component: RegisterComponent},
   { path: 'login', component: LoginComponent},
   { path: 'home', component: HomeComponent, canActivate: [GuardGuard] }
]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }