import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../auth-guard.service';
import {UsersComponent} from './users.component';
import {UserFormComponent} from './user-form/user-form.component';

const usersRoutes: Routes = [
    {
        path: 'admin/users', component: UsersComponent,
        children: [

            {path: 'new', component: UserFormComponent},
            {path: 'edit/:id', component: UserFormComponent},
        ],
        canActivate: [AuthGuardService]
    },
    // { path: '**' ,redirectTo: '/admin/users'}
];


export const usersRouting = RouterModule.forChild(usersRoutes);
