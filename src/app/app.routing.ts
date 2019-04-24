import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AuthGuard} from './_guards';
import {ListAmisComponent} from './list-amis/list-amis.component';
import {ProfileComponent} from './Profile/Profile.component';

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

  }, {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
