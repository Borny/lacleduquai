export interface ChaiTakeAway {
  lastName: string;
  firstName: string;
  phone: string;
  quantity: number;
  state?: TakeAwayState
}

enum TakeAwayState {
  DELIVERED = 'Livré',
  DELAYED = 'Reporté',
  NOSHOW = 'Jamais venu'
}