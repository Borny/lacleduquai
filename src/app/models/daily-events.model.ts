export interface DailyEvents {
  date: Date | number;
  events: Event[];
}

interface Event {
  label: string;
  intervenant: string;
  schedule: string;
  price: string;
  phone: string;
}
