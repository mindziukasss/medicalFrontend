import { Component, OnInit } from '@angular/core';
import {User} from '../users/shared/user';
import {UsersService} from '../users/shared/users.service';
import {fadeInAnimation} from '../../animations/fade_in.animation';


@Component({
  selector: 'app-shedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css'],
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''},
})


export class SchedulesComponent implements OnInit {

    private users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
      return this.usersService.getUsers().subscribe(
          users => this.users = users,
          (error: Response) => console.log(error)
      );
  }

}
