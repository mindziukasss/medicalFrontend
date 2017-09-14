import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent} from './not-found/not-found.component';

const APP_Routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'not-found', component: NotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);