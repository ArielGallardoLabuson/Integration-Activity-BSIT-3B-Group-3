import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  angForm: FormGroup; // declare angForm property

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
    this.angForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    
  }
  postdata(angForm: any) {
    const fullname = angForm.value.fullname;
    const emptyfullname = angForm.value.fullname == '';

    const emptyemail = angForm.value.email == ''
    const emptypassword = angForm.value.password == '';
    ;
    const hasNumber = /\d/.test(fullname);
    if (emptyfullname ) {
      alert("Please fill in, full name is required fields.");
      return;
    }
  else if (emptypassword) {
      alert("Please fill in, password is required fields.");
      return;
    }

    else if (hasNumber) {
      alert("Fullname should not contain numbers.");
      return;
    }
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(angForm.value.email)) {
      // Alert if email is invalid
      alert('Please enter a valid email address');
      return;
    }

    this.dataService.userregistration(
      fullname,
      angForm.value.email,
      angForm.value.password
    )
      .pipe(first())
      .subscribe(data => {
        // Success message
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
        error => {
          // handle registration error
        });
  }

}
