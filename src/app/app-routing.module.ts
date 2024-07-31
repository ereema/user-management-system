import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './main/user-list/user-list.component';
import { CreateUserComponent } from './main/user-list/create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'details/:userId', component: UserDetailsComponent },
  { path: 'add', component: CreateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
