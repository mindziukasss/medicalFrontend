import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {Role} from './shared/role';
import {RolesService} from './shared/roles.service';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

    roles: Role[] = [];

    constructor(private rolesService: RolesService) {

    }

    ngOnInit() {
        this.rolesService.getRoles().subscribe(
            roles => this.roles = roles,
            (error: Response) => console.log(error)
        );
    }


    onDelete(role) {
        if (confirm('Are you sure you want to delete ' + role.name + '?')) {
            const index = this.roles.indexOf(role);
            this.roles.splice(index, 1);

            this.rolesService.deleteRole(role.id)
                .subscribe(null,
                    error => {
                        alert('could not delete post.');
                        this.roles.splice(index, 0, role);
                    });
        }
    }
}



