import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';


@Injectable()
export class PostService {
    constructor(private http: Http, private authService: AuthService) {

    }

    getPosts(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medicback.dev/api/posts?token=' + token).map((response: Response) => {
            return response.json().posts;
        });
    }

    createPost(user_id: string,
                title: string,
               text: string,
               ) {
        const token = this.authService.getToken();
        return this.http.post('http://medicback.dev/api/posts?token=' + token,
            {
                user_id: user_id,
                title: title,
                text: text,

            },
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                return true;
            }
        );
    }
}