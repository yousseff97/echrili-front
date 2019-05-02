import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddTaskComponent} from './add-task/add-task.component';
import {ListTaskComponent} from './list-task/list-task.component';
import {MyTasksComponent} from './my-tasks/my-tasks.component';
import {ChooseBidderComponent} from './choose-bidder/choose-bidder.component';

export const routes: Routes = [
  {
    path: 'add',
    component: AddTaskComponent,
  },
  {
    path: 'list',
    component: ListTaskComponent,
  },
  {
    path: 'my',
    component: MyTasksComponent,
  },
  {
    path: 'choose/bidder/:id',
    component: ChooseBidderComponent,
  },
  {path: '/task/**', redirectTo: 'add'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageTaskRouting {
}
