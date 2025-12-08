export enum Sender {
  USER = 'user',
  BOT = 'bot',
}

export interface Message {
  id: string;
  text: string;
  sender: Sender;
  timestamp: Date;
  isError?: boolean;
}

export interface Order {
  id: string;
  customerName: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  deliveryDate: string;
  items: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  tags: string[]; // e.g., 'gaming', 'office', 'budget', 'premium'
  price: number;
}

export interface MockDatabase {
  orders: Order[];
  products: Product[];
}