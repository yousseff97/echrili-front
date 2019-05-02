import {Component, OnInit} from '@angular/core';
import Bid from '../../_models/bid';
import {TaskService} from '../../_services/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BidService} from '../../_services/bid.service';

@Component({
  selector: 'app-choose-bidder',
  templateUrl: './choose-bidder.component.html',
  styleUrls: ['./choose-bidder.component.css']
})
export class ChooseBidderComponent implements OnInit {

  bids: Bid[] = [];


  constructor(private  bidService: BidService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this
      .route
      .params
      .subscribe(
        params => {
          this.bidService.getBidsOfTask(params['id']).subscribe(bids => this.bids = bids);
          console.log(this.bids);
        }
      );


  }


  onSubmit(event, i) {
    event.preventDefault();

    this.bidService.acceptBid(this.bids[i].id).subscribe(next => {
      console.log('success');
      this.router.navigate(['/task/my']);

    });



  }


}
