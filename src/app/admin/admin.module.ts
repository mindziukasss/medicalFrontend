import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SigninComponent} from './auth/signin/signin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [
        NavBarComponent,
        SigninComponent,
        DashboardComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
    ],

    exports: [
        NavBarComponent,
        SigninComponent
    ],
    providers: [AuthService, AuthGuardService],
})
export class AdminModule {
}
