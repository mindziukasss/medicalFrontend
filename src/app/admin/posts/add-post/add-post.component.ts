import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../post.services';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

    constructor(private postService: PostService,
                private  router: Router) {
    }

    ngOnInit() {
    }

    onCreate(form: NgForm) {
        this.postService.createPost(
            form.value.user_id,
            form.value.title,
            form.value.text
        ).subscribe(
            response => this.router.navigate(['admin/posts']),
            error => console.log(error)
        );
    }

}
