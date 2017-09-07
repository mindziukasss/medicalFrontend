import {Routes, RouterModule} from "@angular/router";
import {AllUsersComponent} from "./admin/users/all-users/all-users.component";

const APP_Routes:Routes = [
    {path: '/admin/users', component: AllUsersComponent}
];

export const routing = RouteModule.forRoot(APP_Routes);