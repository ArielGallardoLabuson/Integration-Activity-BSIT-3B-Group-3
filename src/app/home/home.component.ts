import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auth:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
this.auth = localStorage.getItem('token')
if(!this.auth)
this.router.navigate(['/login']);  
}
}
