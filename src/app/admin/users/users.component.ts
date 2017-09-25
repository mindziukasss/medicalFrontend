import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {UsersService} from './shared/users.service';
import {User} from './shared/user';
import {fadeInAnimation} from '../../animations/animate';
import {Subscription} from 'rxjs/Subscription';
import {AppService} from '../../shared/app.service';

@Component({
    selector: 'app-users',
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''},
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    private users: User[] = [];

    subsciption: Subscription;

    constructor(private usersService: UsersService, private appService: AppService) {
    }

    ngOnInit() {

        this.loadUsers();
        this.subsciption = this.appService.on('users-update').subscribe(
            () => this.loadUsers()
        );

        // this.usersService.getUsers().subscribe(
        //     users => this.users = users,
        //     (error: Response) => console.log(error)
        // );
    }

    loadUsers() {
        return this.usersService.getUsers().subscribe(
            users => this.users = users,
            (error: Response) => console.log(error)
        );
    }

    onDelete(user) {
        if (confirm('Are you sure you want to delete ' + user.first_name + '?')) {
            const index = this.users.indexOf(user);
            this.users.splice(index, 1);

            this.usersService.deleteUser(user.id)
                .subscribe(null,
                    error => {
                        alert('could not delete user.');
                        this.users.splice(index, 0, user);
                    });
        }
    }

}
