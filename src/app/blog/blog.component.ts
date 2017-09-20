import {Component, OnInit} from '@angular/core';

import {BlogService} from './shared/blog.service';
import {Post} from './shared/post';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    posts: Post[] = [];

    constructor(private blogService: BlogService) {
    }

    ngOnInit() {
        this.blogService.getBlogs().subscribe(
            posts => this.posts = posts,
            (error: Response) => console.log(error)
        );

        console.log(this.posts);
    }
}

