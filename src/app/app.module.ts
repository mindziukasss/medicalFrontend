import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './admin/users/all-users/all-users.component';
import { UserComponent } from './admin/users/user/user.component';
import {UserService} from './user.services';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
      routing,
      HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
