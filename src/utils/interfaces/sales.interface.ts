export interface ISales {
  id: number;
  reference: string;
  amount: number;
  status: string;
  totalPrice: number;
  category: string;
  size: string;
  createdAt: string;
  updatedAt: string;
  user: {
    name: string;
  };
}
