import {Routes, RouterModule} from '@angular/router';
import {AllUsersComponent} from './admin/users/all-users/all-users.component';
import {ModuleWithProviders} from '@angular/core';
import {AllPostsComponent} from './admin/posts/all-posts/all-posts.component';

const APP_Routes:Routes = [
    {path: 'admin/users', component: AllUsersComponent},
    {path: 'admin/posts', component: AllPostsComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_Routes);