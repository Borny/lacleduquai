export interface ChaiTakeAway {
  lastName: string;
  firstName: string;
  phone: string;
  quantity: number;
  pickUpDate: Date;
  totalPrice: number,
  state?: TakeAwayState,
  extraInfo?: string
}

enum TakeAwayState {
  PENDING = 'En attente',
  DELIVERED = 'Livré',
  DELAYED = 'Reporté',
  NOSHOW = 'Jamais venu'
}