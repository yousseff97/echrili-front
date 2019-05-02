import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login';
import {AuthGuard} from './_guards/auth.guard';
import {ListAmisComponent} from './list-amis/list-amis.component';
import {ProfileComponent} from './Profile/Profile.component';
import {ManageTaskModule} from './manage-task/manage-task.module';


export function loadManageTaskModule() {
  return ManageTaskModule;
}

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  //  canActivate: [AuthGuard]
  }, {
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
  {
    path: 'task',
    loadChildren: loadManageTaskModule,
  },

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
