import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'blog-management', // Path for managing blogs
    title: 'Blog Management Page',
    component: BlogManagementComponent,
  },
  {
    path: 'home', // Path for managing blogs
    title: 'Home Page',
    component: HomepageComponent,
  },
  
];
