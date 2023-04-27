import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './loginapi.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
angForm: FormGroup;
constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
  this.angForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
  }
  ngOnInit(): void {
    if (this.dataService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }
  postdata(angForm: any) {
    this.dataService.userlogin(
      angForm.value.email,
      angForm.value.password
    )
      .pipe(first())
      .subscribe(data => {
        console.log(data);
        // Success message
       if(data.message ===  'login success'){
     
        alert('login successful');
        this.router.navigate(['/home']);
      }
      else{
        alert('username or password incorrect');
      }
      },
        error => {
          // handle registration error
        });
  }
}
