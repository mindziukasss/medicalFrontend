import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import {Post} from './post';


@Injectable()
export class BlogService {
    constructor(private http: Http) {

    }

    getBlogs(): Observable<any> {
        return this.http.get('http://medicback.dev/api/all/posts').map((response: Response) => {
            // console.log(response.json().posts);
            return response.json().posts;
        });
    }

    getBlog(id: any): Observable<any> {
        return this.http.get('http://medicback.dev/api/one/post/' + id)
            .map(
                (response: Response) => {
                    return response.json().post;
                }
            );
    }
}
