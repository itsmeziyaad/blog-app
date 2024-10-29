import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-management',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './blog-management.component.html',
  styleUrl: './blog-management.component.css',
})
export class BlogManagementComponent {
  blogForm: FormGroup

  constructor(private fb: FormBuilder, private blogService: BlogService) 
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
        const blogData = {
          id: 1,
          ...this.blogForm.value,
          tags: this.blogForm.value.tags.split(',').map((tag: string) => tag.trim())
        };
        this.blogService.createBlog(blogData).subscribe(response => {
          console.log('Blog created:', response)
        });
        this.blogService.updateBlog(blogData).subscribe(response => {
          console.log('Blog updated:', response)
        });
        
      }
      else 
      {
        console.log('Form is invalid')
      }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const blogId = 1;
    this.blogService.getBlogById(blogId).subscribe(blog => {
      this.blogForm.patchValue({
        title: blog.title,
        content: blog.content,
        tags: blog.tags.join(',')
      });
    });
  }
}