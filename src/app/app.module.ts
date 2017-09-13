import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthService} from './auth.service';


import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './admin/users/all-users/all-users.component';
import { UserComponent } from './admin/users/user/user.component';
import {UserService} from './user.services';
import { AllPostsComponent } from './admin/posts/all-posts/all-posts.component';
import { PostComponent } from './admin/posts/post/post.component';
import {PostService} from './post.services';
import { SigninComponent } from './admin/auth/signin/signin.component';
import { SignoutComponent } from './admin/auth/signout/signout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {AuthGuardService} from './auth-guard.service';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    SigninComponent,
    SignoutComponent,
    DashboardComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
      routing,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
  ],
  providers: [UserService, PostService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
