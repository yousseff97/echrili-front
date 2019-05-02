import Bid from './bid';
import Review from './review';

export default class Task {

  id: number;
  location: string;
  price: number;
  deliveryTime: number;
  phone: number;
  description: string;
  createDateTime: Date;
  bids : Bid[];
  review : Review;
}
