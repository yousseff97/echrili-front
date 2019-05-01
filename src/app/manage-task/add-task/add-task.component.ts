import {Component, OnInit} from '@angular/core';
import {Task} from '../../_models/task';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {log} from 'util';
import {TaskService} from '../../_services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();


  constructor(private formBuilder: FormBuilder,
              private taskService: TaskService
  ) {
  }

  ngOnInit() {

  }

  onSubmit(ev) {
    ev.preventDefault();
    if (this.task.phone == null || this.task.price == null || this.task.location == null || this.task.description == null) {
      console.log(this.task);
      alert('sth is missing');
    } else {
      this.taskService.addTask(this.task).subscribe(next => {
        console.log('success');
      });
    }

  }
}
