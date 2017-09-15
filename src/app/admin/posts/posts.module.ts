import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {CommonModule} from '@angular/common';
import {AuthService} from '../auth.service';
import {PostsComponent} from './posts.component';
import {PostFormComponent} from './post-form/post-form.component';
import {PostsService} from './shared/posts.service';


@NgModule({
    declarations: [
        PostsComponent,
        PostFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
    ],

    exports: [
        PostsComponent
    ],
    providers: [AuthService, PostsService],
})
export class PostsModule { }
