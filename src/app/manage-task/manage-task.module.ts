import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddTaskComponent} from './add-task/add-task.component';
import {ManageTaskRouting} from './manage-task.routing';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {FormsModule} from '@angular/forms';
import { ListTaskComponent } from './list-task/list-task.component';

@NgModule({
  declarations: [AddTaskComponent, SideBarComponent, ListTaskComponent],
  imports: [
    CommonModule,
    ManageTaskRouting,
    FormsModule

  ]
})
export class ManageTaskModule {
}
