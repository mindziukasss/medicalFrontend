import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {Role} from './shared/role';
import {RolesService} from './shared/roles.service';
import {Subscription} from 'rxjs/Subscription';
import {AppService} from '../../shared/app.service';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

    roles: Role[] = [];
    subsciption: Subscription;

    constructor(private rolesService: RolesService, private appService: AppService) {

    }

    ngOnInit() {

        this.loadRoles();
        this.subsciption = this.appService.on('roles-update').subscribe(
            () => this.loadRoles()
            // this.rolesService.getRoles().subscribe(
            //     roles => this.roles = roles,
            //     (error: Response) => console.log(error)
        );
    }


    loadRoles() {
        return this.rolesService.getRoles().subscribe(
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



