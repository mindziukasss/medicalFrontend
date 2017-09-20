import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogService} from '../shared/blog.service';
import {Post} from '../../admin/posts/shared/post';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

    title: string;
    post: Post = new Post();

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private blogService: BlogService) {
    }

    ngOnInit() {
        var id = this.activatedRoute.params.subscribe(params => {
            var id = params['id'];

            this.blogService.getBlog(id).subscribe(
                post => this.post = post,
                response => {
                    if (response.status === 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });

    }

}
