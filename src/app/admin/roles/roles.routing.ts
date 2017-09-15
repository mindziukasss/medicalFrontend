import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../auth-guard.service';
import {RolesComponent} from './roles.component';
import {RoleFormComponent} from './role-form/role-form.component';



const rolesRoutes: Routes = [
    {path: 'admin/roles', component: RolesComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
    {path: 'admin/roles/new', component:RoleFormComponent, canActivate: [AuthGuardService]},
    {path: 'admin/roles/:id', component:RoleFormComponent, canActivate: [AuthGuardService]},

];


export const rolesRouting = RouterModule.forChild(rolesRoutes);
