import {Component, OnInit} from '@angular/core';
import {User} from '../../../user.interface';
import {UserService} from '../../../user.services';
import {Response} from '@angular/http';

@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

    users: User[];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUsers().subscribe(
            (users: User[]) => this.users = users,
            (error: Response) => console.log(error)
        );
    }

    // onGetUsers() {
    // }

}
