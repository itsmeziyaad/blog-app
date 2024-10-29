import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Blog {
  id?: number;
  title: string;
  content: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'http://localhost/blog_app';

  constructor(private http: HttpClient) {}

  //Create
  createBlog(blog: Blog): Observable<Blog> 
  {
    return this.http.post<Blog>(`${this.apiUrl}create_blog.php`, blog);
  }

  //Read this is to get all the blogs
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}get_blogs.php`);
  }

  //Get single blog entry
  getBlogById(id:number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}get_blog.php?id=${id}`);
  }
  //update by id
  updateBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(`${this.apiUrl}update_blog.php`, blog);
  }

  //delete
  deleteBlog(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/delete_blog.php`, {id});
  }


}
