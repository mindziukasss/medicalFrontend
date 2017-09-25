import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {CommonModule} from '@angular/common';
import {AuthService} from '../auth.service';

import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {CalendarModule} from 'angular-calendar';
import {UsersComponent} from '../users/users.component';
import {UsersService} from '../users/shared/users.service';
import {SchedulesComponent} from './schedules.component';
import {CalendarComponent} from './calendar/calendar.component';


@NgModule({
    declarations: [
        SchedulesComponent,
        CalendarComponent
           ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        MultiselectDropdownModule,
        CalendarModule.forRoot()
    ],

    exports: [
        SchedulesComponent
    ],
    providers: [AuthService, UsersService],
})
export class SchedulesModule { }
