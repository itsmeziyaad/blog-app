import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) 
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user',[Validators.required]]
    });
  }

  onSubmit() 
  {
    if(this.loginForm.valid)
      {
        const loginData = this.loginForm.value;
        console.log('Login data:', this.loginForm.value);

        if (loginData.role === 'admin')
          {
            console.log('Admin login');
          }
          else
          {
            console.log('User login');
          }
      } 
      else
      {
        console.log('Form is invalid');
      }
  }

}
