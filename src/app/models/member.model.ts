import { SeasonEnum } from './season.enum';

export interface Refund {
  amount: number;
  date: Date;
}

export interface Check {
  amount: string;
  depositMade: boolean;
  depositDate?: Date;
}

export interface CourseMember {
  waitingList: boolean;
  courseId: string;
  courseLabel: string;
}

export interface Member {
  _id: string;
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  courses: CourseMember[];
  workshops: string[];
  refunds?: Refund[];
  totalRefund?: number;
  paymentMethod: string;
  checks?: Check[];
  paymentReceived: boolean;
  paymentAmount?: number;
  previouslyEnrolled: boolean;
  previousCourseInfo?: string;
  extraInfo?: string;
  subscriptionRequestDate: Date;
  subscriptionDate: Date;
  season: SeasonEnum;
}
