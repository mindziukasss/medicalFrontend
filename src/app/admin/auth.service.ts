import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class AuthService {

    result: Array<Object>;

    constructor(private http: Http, private router: Router) {

    }

    signin(email: string, password: string) {
        return this.http.post('http://medicback.dev/api/users/signin',
            {email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                const token = response.json().token;
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                return {
                    token: token, decoded_token: JSON.parse(window.atob(base64))
                }
            }
        ).do(
            tokenData => {
                localStorage.setItem('token', tokenData.token)
            }
        );
    }

    getToken() {
        return localStorage.getItem('token');
    }

    // url: string = 'http://medicback.dev/api ;

    isLoggedIn() {
        // this.http.get('http://medicback.dev/api/users/logged-in?token=' + this.getToken())
        //     .map(response => response.json())
        //     .subscribe(result => this.result = result);
        // if (this.result) {
        //     return true;
        // } else {
        //     localStorage.removeItem('token');
        //     return false;
        // }

        return tokenNotExpired();
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['admin/login']);
    }
}
