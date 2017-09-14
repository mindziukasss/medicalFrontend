import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {UsersComponent} from './users.component';
import {CommonModule} from '@angular/common';
import {AuthService} from '../auth.service';
import {UsersService} from './shared/users.service';
import {UserFormComponent} from './user-form/user-form.component';


@NgModule({
    declarations: [
        UsersComponent,
        UserFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
    ],

    exports: [
        UsersComponent
    ],
    providers: [AuthService, UsersService],
})
export class UsersModule { }
