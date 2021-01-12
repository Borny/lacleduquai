export interface DayEvents {
  date: Date;
  label: string;
  dayOfYear: number;
  events: Event[];
}

export interface Event {
  date: Date[];
  name: string;
  prof: string;
  schedule: string;
  price: string;
  phone: number;
}
