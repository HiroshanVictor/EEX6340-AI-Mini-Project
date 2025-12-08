import { Order, Product } from './types';

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-123',
    customerName: 'Alice Johnson',
    status: 'Shipped',
    deliveryDate: '2023-11-15',
    items: ['UltraWide Monitor', 'Mechanical Keyboard'],
  },
  {
    id: 'ORD-456',
    customerName: 'Bob Smith',
    status: 'Delivered',
    deliveryDate: '2023-10-20',
    items: ['Wireless Mouse'],
  },
  {
    id: 'ORD-789',
    customerName: 'Charlie Brown',
    status: 'Processing',
    deliveryDate: 'TBD',
    items: ['Gaming Laptop'],
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'P-001',
    name: 'Titan GT Gaming Laptop',
    category: 'Laptop',
    tags: ['gaming', 'high-performance'],
    price: 1500,
  },
  {
    id: 'P-002',
    name: 'WorkStream Pro Laptop',
    category: 'Laptop',
    tags: ['office', 'productivity', 'lightweight'],
    price: 900,
  },
  {
    id: 'P-003',
    name: 'MechMaster RGB Keyboard',
    category: 'Keyboard',
    tags: ['gaming', 'mechanical'],
    price: 120,
  },
  {
    id: 'P-004',
    name: 'ErgoType Silent Keyboard',
    category: 'Keyboard',
    tags: ['office', 'ergonomic'],
    price: 80,
  },
  {
    id: 'P-005',
    name: 'Visionary 4K Monitor',
    category: 'Monitor',
    tags: ['office', 'creative'],
    price: 400,
  },
  {
    id: 'P-006',
    name: 'SpeedFrame 240Hz Monitor',
    category: 'Monitor',
    tags: ['gaming', 'esports'],
    price: 350,
  },
];

export const SYSTEM_INSTRUCTION = `
You are "Shop Assistant Bot", a helpful customer support agent for "Tech Gear", a computer electronics e-commerce store.

Your goal is to answer customer queries politely and concisely.

Rules:
1.  **Identity**: You are a bot, not a human. If a question is outside your domain (Orders, Returns, Products), politely ask them to contact human support at support@techgear.lk.
2.  **Orders**: 
    - If a user asks for "Order Status", YOU MUST ask for their Order ID if they haven't provided it. 
    - Use the 'getOrderStatus' tool to find details.
3.  **Recommendations**: 
    - If a user asks for a recommendation, YOU MUST ask what they will use it for (e.g., gaming vs office) if they haven't specified.
    - Use the 'searchProducts' tool to find matches.
4.  **Returns**: 
    - Policy: "Returns are allowed within 7 days of delivery for full refunds on undamaged items."
    - Do not make up other policies.
5.  **Tone**: Friendly, professional, and concise.

Always check if you need to call a tool to answer the question.
`;