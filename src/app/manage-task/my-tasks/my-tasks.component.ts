import {Component, OnInit} from '@angular/core';
import Task from '../../_models/task';
import {TaskService} from '../../_services/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {
  taskList: Task  [] = null;

  constructor(private  taskService: TaskService, private router: Router) {
  }

  ngOnInit() {

    this.taskService.getAllMyTasks().subscribe(
      (data: Task[]) => this.taskList = data);

  }

  onClick(event, i) {
    event.preventDefault();
    console.log(this.taskList[i].id);
    this.router.navigate(['/task/choose/bidder/' + this.taskList[i].id ]);


  }
}
