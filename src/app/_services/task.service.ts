import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models/user';
import {Config} from '../shared/Config';
import Notification from '../_models/notification';
import Task from '../_models/task';
import Bid from '../_models/bid';

@Injectable({providedIn: 'root'})
export class TaskService {
  constructor(private http: HttpClient) {
  }

  addTask(task: Task) {

    return this.http.post(`${Config.apiUrl}/tasks/add`, task);

  }




  getAllMyTasks() {
    return this.http.get<Task[]>(`${Config.apiUrl}/tasks/my`);
  }
}
