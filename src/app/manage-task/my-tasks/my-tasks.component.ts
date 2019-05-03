import {Component, OnInit} from '@angular/core';
import Task from '../../_models/task';
import {TaskService} from '../../_services/task.service';
import {Router} from '@angular/router';
import bid from '../../_models/bid';
import Review from '../../_models/review';
import review from '../../_models/review';
import {UserService} from '../../_services/user.service';

declare var $: any;

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {
  taskList: Task  [] = null;
  reviews: Review[] = null;

  constructor(private  taskService: TaskService, private router: Router, private  userService: UserService) {
  }

  ngOnInit() {

    this.taskService.getAllMyTasks().subscribe(
      (data: Task[]) => {
        this.taskList = data;

        this.reviews = Review[this.taskList.length];

      });

  }

  onClick(event, i) {

    console.log(this.taskList[i].id);
    if (!this.isActiveTask(this.taskList[i])) {
      event.preventDefault();
      this.router.navigate(['/task/choose/bidder/' + this.taskList[i].id]);
    } else {

    }


  }


  isActiveTask(t: Task) {

    for (let b of t.bids) {
      if (b.status == true) {
        return true;
      }
    }
    return false;


  }

  getIdBidder(t: Task) {

    for (let b of t.bids) {
      if (b.status == true) {
        return b.user.id;
      }
    }
    return null;


  }


  reviewSubmit(i) {

    var addToTrustedList = $('#radio-2-' + (i + 1)).prop('checked');
    var rating = 0;
    if ($('#rating-radio-1').prop('checked')) {
      rating = 5;
    } else if ($('#rating-radio-2').prop('checked')) {
      rating = 4;
    } else if ($('#rating-radio-3').prop('checked')) {
      rating = 3;
    } else if ($('#rating-radio-4').prop('checked')) {
      rating = 4;
    } else if ($('#rating-radio-5').prop('checked')) {
      rating = 1;
    }


    if (!addToTrustedList) {
      var idBidder = this.getIdBidder(this.taskList[i]);
      this.userService.addTrustedUser(idBidder).subscribe(next => {
      });
    }
    console.log(idBidder);
    var review: Review = new Review();
    review.id = idBidder;
    review.rate = rating;
    this.userService.addReview(review).subscribe(next => {

    });
    this.taskService.delete(this.taskList[i].id).subscribe(next => window.location.reload());

  }

  deleteTask($event, i: number) {
    $event.preventDefault();
    this.taskService.delete(this.taskList[i].id).subscribe(next => $('#task-' + i).fadeOut());
  }
}
