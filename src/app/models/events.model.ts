export interface DayEvents {
  date: Date;
  label: string;
  dayOfYear: number;
  events: Event[];
}

export interface Event {
  expanded?: boolean;
  _id: string;
  dates: Date[];
  daysOfTheYear: number[];
  name: string;
  prof: string;
  timeStart: Date;
  timeEnd: Date;
  price: number;
  phone: number;
  description: string;
  linkType: string;
  link: string;
}
