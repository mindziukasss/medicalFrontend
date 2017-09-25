import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AdminModule} from './admin/admin.module';
import {adminRouting} from './admin/admin.routing';
import {UsersModule} from './admin/users/users.module';
import {usersRouting} from './admin/users/users.routing';
import {postsRouting} from './admin/posts/posts.routing';
import {PostsModule} from './admin/posts/posts.module';
import {RolesModule} from './admin/roles/roles.module';
import {rolesRouting} from './admin/roles/roles.routing';
import {MenuNavBarFrontendComponent} from './menu-nav-bar-frontend/menu-nav-bar-frontend.component';
import {BlogComponent} from './blog/blog.component';
import {AboutComponent} from './about/about.component';
import {BlogPostComponent} from './blog/blog-post/blog-post.component';
import {blogRouting} from './blog/blog.routing';
import {BlogModule} from './blog/blog.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppService} from './shared/app.service';
import {SchedulesModule} from './admin/schedules/schedules.module';
import {schedulesRouting} from './admin/schedules/schedules.routing';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        MenuNavBarFrontendComponent,
        AboutComponent,
        BlogPostComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        AdminModule,
        adminRouting,
        ReactiveFormsModule,
        UsersModule,
        usersRouting,
        PostsModule,
        postsRouting,
        RolesModule,
        rolesRouting,
        BlogModule,
        blogRouting,
        BrowserAnimationsModule,
        SchedulesModule,
        schedulesRouting,

    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
