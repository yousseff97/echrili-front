import {User} from './user';

export default class Bid {

  id: number;
  taskId: number;
  price: number;
  deliveryTime: number;
  user: User;
  status: boolean;

}
