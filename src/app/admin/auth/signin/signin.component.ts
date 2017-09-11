import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth.service';
import {NgForm} from '@angular/forms';
import {subscribeOn} from 'rxjs/operator/subscribeOn';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    onSignin(form: NgForm){
        this.authService.signin(form.value.email, form.value.password).subscribe(
            response => console.log(response),
            error => console.log(error)
        );
    }
}
