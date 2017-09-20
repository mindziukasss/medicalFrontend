import {RouterModule, Routes} from '@angular/router';


import {BlogComponent} from './blog.component';
import {BlogPostComponent} from './blog-post/blog-post.component';


const blogRoutes: Routes = [
    {path: 'blog', component: BlogComponent, pathMatch: 'full'},
    {path: 'blog/:id', component: BlogPostComponent},

];


export const blogRouting = RouterModule.forChild(blogRoutes);
