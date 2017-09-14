import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }


    isLoggedIn() {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    }

    onLogout() {
        this.authService.logout();
    }

}
