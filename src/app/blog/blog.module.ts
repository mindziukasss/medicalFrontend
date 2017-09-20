import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {CommonModule} from '@angular/common';

import {BlogService} from './shared/blog.service';

import {BlogComponent} from './blog.component';


@NgModule({
    declarations: [
        BlogComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
    ],

    exports: [
        BlogComponent
    ],
    providers: [BlogService],
})
export class BlogModule {
}
