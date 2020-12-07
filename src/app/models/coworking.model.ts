export interface Coworking {
  name: string;
  phone: string;
  email: string;
  memberCount: number;
  bookingDate: Date[];
  totalPrice: number;
}

export interface CoworkingBookedDay {
  date: Date;
  bookedPeople: number;
}
