import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddTaskComponent} from './add-task/add-task.component';
import {ListTaskComponent} from './list-task/list-task.component';

export const routes: Routes = [
  {
    path: 'add',
    component: AddTaskComponent,
  },
  {
    path: 'list',
    component: ListTaskComponent,
  },
  {path: '/task/**', redirectTo: 'add'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageTaskRouting {
}
