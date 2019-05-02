import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddTaskComponent} from './add-task/add-task.component';
import {ManageTaskRouting} from './manage-task.routing';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {FormsModule} from '@angular/forms';
import { ListTaskComponent } from './list-task/list-task.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { ChooseBidderComponent } from './choose-bidder/choose-bidder.component';

@NgModule({
  declarations: [AddTaskComponent, SideBarComponent, ListTaskComponent, MyTasksComponent, ChooseBidderComponent],
  imports: [
    CommonModule,
    ManageTaskRouting,
    FormsModule
  ],
  bootstrap: [ListTaskComponent]
})
export class ManageTaskModule {
}
