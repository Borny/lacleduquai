export interface ChaiTakeAway {
  lastName: string;
  firstName: string;
  phone: number;
  quantity: number;
  pickUpDate: Date;
  hasOwnContainer: boolean,
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