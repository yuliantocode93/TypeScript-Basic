export enum CustomerType {
  REGULAR = "regular",
  GOLD = "2",
  PLATINUM = "platinum",
}

export type Customer = {
  id: number;
  name: string;
  email: string;
  type: CustomerType;
};
