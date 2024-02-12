export interface Employee {
  id: string;
  name: string;
  devision: string;
}

export interface Manager extends Employee {
  numberOfEmployee: number;
}
