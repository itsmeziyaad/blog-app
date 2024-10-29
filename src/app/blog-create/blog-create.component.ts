import { Component } from '@angular/core';
import { Blog, BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './blog-create.component.html',
  styleUrl: './blog-create.component.css',
})
export class BlogCreateComponent {
  blog: Blog = { title: '', content: '', tags: [] };

  constructor(private blogService: BlogService, private router: Router) {}

  createBlog(): void {
    this.blogService.createBlog(this.blog).subscribe(
      (data) => {
        console.log('Blog created:', data);
        this.router.navigate(['/blogs']);
      },
      (error) => {
        console.error('Error creating blog:', error);
      }
    );
  }
}
