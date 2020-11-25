export interface Check {
  amount: string;
  depositMade: boolean;
  depositDate?: Date;
}

export interface Member {
  _id: string;
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  courses: string[];
  workshops: string[];
  paymentMethod: string;
  checks?: Check[];
  paymentReceived: boolean;
  paymentAmount?: string;
  previouslyEnrolled: boolean;
  previousCourseInfo?: string;
  extraInfo?: string;
}