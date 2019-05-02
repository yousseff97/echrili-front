import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Bid from '../_models/bid';
import {Config} from '../shared/Config';
import Task from '../_models/task';

@Injectable({providedIn: 'root'})
export class BidService {
  constructor(private http: HttpClient) {
  }

  getBidsOfTask(id: number) {
    return this.http.get<Bid[]>(`${Config.apiUrl}/bids/` + id);
  }


  getAllWithoutBid() {
    return this.http.get<Task[]>(`${Config.apiUrl}/tasks`);
  }

  addBid(bid: Bid) {
    return this.http.post(`${Config.apiUrl}/bids`, bid);
  }

  acceptBid(id) {
    return this.http.post(`${Config.apiUrl}/bids/accept?id=` + id, {});
  }


}
