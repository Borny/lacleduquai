export interface ChaiTakeAway {
  _id: string;
  lastName: string;
  firstName: string;
  phone: number;
  quantity: number;
  pickUpDate: Date;
  hasOwnContainer: boolean,
  price: number,
  totalPrice: number,
  totalDeposit: number,
  state?: TakeAwayState,
  extraInfo?: string
}

export enum TakeAwayState {
  PENDING = 'En attente',
  DELIVERED = 'Livré',
  DELAYED = 'Reporté',
  NOSHOW = 'Jamais venu'
}