import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../_services/task.service';
import Task from '../../_models/task';
import Bid from '../../_models/bid';
import {BidService} from '../../_services/bid.service';

declare let $: any;


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {


  taskList: Task  [] = null;

  constructor(private  taskService: TaskService, private  bidService: BidService) {
  }

  ngOnInit() {

    this.bidService.getAllWithoutBid().subscribe(
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
    bid.taskId = this.taskList[i].id;
    console.log(bid);
    this.bidService.addBid(bid).subscribe(next => $('#task-' + i).fadeOut());
  }
}
