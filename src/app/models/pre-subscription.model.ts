import { SeasonEnum } from './season.enum';

export interface PreSubscription {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  courses: string[];
  workshops: string[];
  previouslyEnrolled: boolean;
  previousCourseInfo?: string;
  paymentMethod: string;
  subscriptionRequestDate: Date;
  subscriptionDate: Date;
  season: SeasonEnum;
}
