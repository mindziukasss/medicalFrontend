import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../user.services';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../user.interface';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

    private user: User = new User();

    constructor(private userService: UserService,
                private formBuilder: FormBuilder,
                private router: Router,
                private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        let params: any = this.activateRoute.snapshot.params;
        this.userService.getUser(params.id).subscribe(
            user => this.user = user,
            error => console.log(error)
        );
    }

    public onUpdate(evant: any) {
        this.userService.updateUser(this.user).subscribe(
            user => this.router.navigate(['admin/users']),
            error => console.log(error)
        );
    }

}
