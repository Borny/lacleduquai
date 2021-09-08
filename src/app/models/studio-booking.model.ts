export interface MainStudioBooking {
  _id?: string;
  booked?: boolean;
  lastName: string;
  firstName: string;
  date: Date;
  endTime: string;
  startTime: string;
  activity: string;
  paidActivity: boolean;
  email: string;
  phone: string;
}
