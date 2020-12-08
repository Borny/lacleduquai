export interface Coworking {
  name: string;
  phone: string;
  email: string;
  personCount: number;
  bookingDate: Date[];
  token: any; // StripeCheckoutOptions;
}

export interface CoworkingBookedDay {
  date: Date;
  bookedPeople: number;
}
