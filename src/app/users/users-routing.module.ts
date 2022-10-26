import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';

const routes: Routes = [{
  path: '', component: UsersComponent,
  children: [
    { path: '', component: UserListComponent },
    { path: 'list', component: UserListComponent },
    { path: 'category/:category', component: UserListComponent }
  ]
},
{ path: 'Profile/:id', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
