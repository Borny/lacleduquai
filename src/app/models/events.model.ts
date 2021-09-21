import { PriceMode } from "./price-mode.enum";

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
  priceMode: PriceMode;
  phone: string;
  description: string;
  linkType: string;
  link: string;
}
