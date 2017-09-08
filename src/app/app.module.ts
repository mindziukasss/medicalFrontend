import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './admin/users/all-users/all-users.component';
import { UserComponent } from './admin/users/user/user.component';
import {UserService} from './user.services';
import { AllPostsComponent } from './admin/posts/all-posts/all-posts.component';
import { PostComponent } from './admin/posts/post/post.component';
import {PostService} from './post.services';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
      routing,
      HttpModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
