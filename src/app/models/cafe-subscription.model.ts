import { SeasonEnum } from './season.enum';

export interface CafeSubscription {
  _id?: string;
  lastName: string;
  firstName: string;
  email: string;
  subscriptionDate: Date;
  season: SeasonEnum;
  newsletterSubscription: boolean;
}
