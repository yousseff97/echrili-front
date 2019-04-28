import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AuthGuard} from './_guards';
import {ListAmisComponent} from './list-amis/list-amis.component';
import {ListUsersComponent} from './list-users/list-users.component';
import {ListFriendRequestsComponent} from './list-friend-requests/list-friend-requests.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'friends',
    component: ListAmisComponent,
    canActivate: [AuthGuard]
  },{
    path: 'friends/request',
    component: ListFriendRequestsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: ListUsersComponent,
    canActivate: [AuthGuard]
  },

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
