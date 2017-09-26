import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role} from '../shared/role';
import {ActivatedRoute, Router} from '@angular/router';
import {RolesService} from '../shared/roles.service';
import {AppService} from '../../../shared/app.service';
import {slideInOutAnimation} from '../../../animations/animate';

@Component({
    selector: 'app-role-form',
    templateUrl: './role-form.component.html',
    styleUrls: ['./role-form.component.css'],
    animations: [slideInOutAnimation],
    host: {'[@slideInOutAnimation]': ''}
})
export class RoleFormComponent implements OnInit {

    form: FormGroup;
    title: string;
    role: Role = new Role();

    constructor(formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private rolesService: RolesService,
                private appService: AppService) {
        this.form = formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
        });
    }

    ngOnInit() {
        var id = this.activatedRoute.params.subscribe(params => {
            var id = params['id'];
            this.title = id ? 'Edit Role' : 'New Role';

            if (!id)
                return;

            this.rolesService.getRole(id).subscribe(
                role => this.role = role,
                response => {
                    if (response.status === 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });

        if (this.router.url === '/admin/roles/new') {
        }
    }

    onSave() {
        var result = this.form.value;
        var role = this.form.value;
        if (this.role.id) {
            role.id = this.role.id;
            result = this.rolesService.updateRole(role);
        } else {
            result = this.rolesService.createRole(role);
        }

        result.subscribe(
            role => {
                this.router.navigate(['admin/roles']);
                this.appService.publish('roles-update');
            },
            error => console.log(error)
        );
    }

}
