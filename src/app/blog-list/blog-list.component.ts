import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BlogService, Blog } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchBlogs();
      //this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
      //  this.blogs = blogs;
      //});
  }

  fetchBlogs(): void 
  {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {
      this.blogs = data;
    },
    (error) => 
      {
        console.error('Error fetching blogs:', error);
      }
  )
  }

  deleteBlog(id: number): void 
  {
    this.blogService.deleteBlog(id).subscribe(() => {
      this.blogs = this.blogs.filter(blog => blog.id !== id);
    });
  } 
}
