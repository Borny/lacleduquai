export interface Course {
  // id: string;
  // detail: string;
  // name: string;
  _id: string;
  name: string;
  time: string;
  maxAttendee: number;
  attendeesCount: number;
  waitingList?: string[];
  day: string;
  level: string;
  professor: string;
  position: number;
}
