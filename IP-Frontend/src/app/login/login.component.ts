import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthServiceHelper } from '../core/auth-helper.service';
import { Router } from '@angular/router';
import { UserTokens } from 'src/api/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceHelper,
    private router: Router,
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (!this.loginForm.valid) {
      alert('Please fill all the fields');
    } else {
      this.authService.login(
        this.loginForm.get('email')?.value as string,
        this.loginForm.get('password')?.value as string
      ).subscribe((res)=> {
        if (res.userId != null){
          localStorage.setItem('id', res.userId);
          this.router.navigate(['/home']);
        }else{
          alert('login failed')
        }
      })


    }
  }
}
