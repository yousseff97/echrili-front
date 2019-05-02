import Review from './review';

export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  token?: string;
  review: Review;
}
