import {Routes, RouterModule} from '@angular/router';

import {SigninComponent} from './auth/signin/signin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuardService} from './auth-guard.service';

const adminRoutes: Routes = [
    {path: 'admin/login', component: SigninComponent},
    {path: 'admin', component: DashboardComponent, canActivate: [AuthGuardService]}
];

export const adminRouting = RouterModule.forChild(adminRoutes);
