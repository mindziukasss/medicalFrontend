import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../auth-guard.service';
import {SchedulesComponent} from './schedules.component';
import {CalendarComponent} from './calendar/calendar.component';

const schedulesRoutes: Routes = [
    {
        path: 'admin/schedules', component: SchedulesComponent,
        children: [

            // {path: 'new', component: UserFormComponent},
            {path: 'calendar/:id', component: CalendarComponent},
        ],
        canActivate: [AuthGuardService]
    },
    // { path: '**' ,redirectTo: '/admin/users'}
];


export const schedulesRouting = RouterModule.forChild(schedulesRoutes);
