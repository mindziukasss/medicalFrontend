import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth.service';
import {Post} from './post';



@Injectable()
export class PostsService {
    constructor(private http: Http, private authService: AuthService) {

    }

    getPosts(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medicback.dev/api/posts?token=' + token).map((response: Response) => {
            return response.json().posts;
        });
    }

    createPost(post) {
        const token = this.authService.getToken();
        return this.http.post('http://medicback.dev/api/posts?token=' + token,
            post,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                return true;
            }
        );
    }

    updatePost(post) {
        const token = this.authService.getToken();
        return this.http.put('http://medicback.dev/api/posts/' + post.id + '?token=' + token,
            post,
            {headers: new Headers({'Content-type': 'application/json'})}
        ).map(
            (response: Response) => response.json()
        );
    }

    deletePost(id: any) {
        const token = this.authService.getToken();
        return this.http.delete('http://medicback.dev/api/posts/' + id + '?token=' + token);
    }

    getPost(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medicback.dev/api/posts/' + id + '?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().post;
                }
            );
    }
}
