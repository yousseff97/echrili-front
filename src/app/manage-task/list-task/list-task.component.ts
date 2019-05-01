import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../_services/task.service';
import {Task} from '../../_models/task';
import {Bid} from '../../_models/bid';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {


  taskList: Task  [] = null;

  constructor(private  taskService: TaskService) {
  }

  ngOnInit() {

    this.taskService.getAll().subscribe(
      data => {
        data.forEach(t => t.deliveryTime = 1);
        this.taskList = data;

      }
    );


  }

  addBid(i: number) {

    let bid: Bid = new Bid();
    bid.deliveryTime = this.taskList[i].deliveryTime;
    bid.price = this.taskList[i].price;
    console.log(bid);
    this.taskService.addBid(bid);
  }
}
