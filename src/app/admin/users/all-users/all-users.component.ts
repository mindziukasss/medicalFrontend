import {Component, OnInit} from '@angular/core';
import {User} from '../../../user.interface';
import {UserService} from '../../../user.services';
import {Response} from '@angular/http';
import {subscribeOn} from "rxjs/operator/subscribeOn";

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

    onDelete(user: any) {
        const result = confirm('Are you sure?');
        if (result) {
            const index = this.users.indexOf(user);
            this.users.splice(index, 1);

            this.userService.deleteUser(user.id)
            .subscribe(null,
                error => {
                    alert('could not delete user.');
                    this.users.splice(index, 0, user);
                });
        }
    }

}
