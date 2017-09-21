import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {Post} from './shared/post';
import {PostsService} from './shared/posts.service';
import {fadeInAnimation} from '../../animations/animate';

@Component({
    selector: 'app-posts',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''},
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts: Post[] = [];

    constructor(private postsService: PostsService) {

    }

    ngOnInit() {
        this.postsService.getPosts().subscribe(
            posts => this.posts = posts,
            (error: Response) => console.log(error)
        );
    }

    onDelete(post) {
        if (confirm('Are you sure you want to delete ' + post.title + '?')) {
            const index = this.posts.indexOf(post);
            this.posts.splice(index, 1);

            this.postsService.deletePost(post.id)
                .subscribe(null,
                    error => {
                        alert('could not delete post.');
                        this.posts.splice(index, 0, post);
                    });
        }
    }

}
