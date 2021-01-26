export interface DayEvents {
  date: Date;
  label: string;
  dayOfYear: number;
  events: Event[];
}

export interface Event {
  _id: string;
  dates: Date[];
  name: string;
  prof: string;
  timeStart: Date;
  timeEnd: Date;
  price: number;
  phone: number;
}
