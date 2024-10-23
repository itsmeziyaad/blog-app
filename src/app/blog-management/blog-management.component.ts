import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog-management',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './blog-management.component.html',
  styleUrl: './blog-management.component.css',
})
export class BlogManagementComponent {
  blogForm: FormGroup

  constructor(private fb: FormBuilder) 
  {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(20)]],
      tags: ['']
    });
  }

  onSubmit() {
    if (this.blogForm.valid) 
      {
        console.log('Blog Entry:', this.blogForm.value);
      }
      else 
      {
        console.log('Form is invalid')
      }
  }
}