import { Component, OnInit } from '@angular/core';
import {User} from "../../../user.interface";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit() {
  }

}
