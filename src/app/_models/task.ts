import Bid from './bid';

export default class Task {

  id: number;
  location: string;
  price: number;
  deliveryTime: number;
  phone: number;
  description: string;
  createDateTime: Date;
  bids : Bid[];
}
