import { Order, Product } from './types';

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-123',
    customerName: 'Alice Johnson',
    status: 'Shipped',
    deliveryDate: '2025-12-15',
    items: ['UltraWide Monitor', 'Mechanical Keyboard'],
  },
  {
    id: 'ORD-456',
    customerName: 'Bob Smith',
    status: 'Delivered',
    deliveryDate: '2025-12-20',
    items: ['Wireless Mouse'],
  },
  {
    id: 'ORD-789',
    customerName: 'Charlie Brown',
    status: 'Processing',
    deliveryDate: 'TBD',
    items: ['Gaming Laptop'],
  },
  {
    id: 'ORD-890',
    customerName: 'David Martinez',
    status: 'Shipped',
    deliveryDate: '2025-12-18',
    items: ['AMD Ryzen 9 7950X Processor', 'G.Skill Trident Z5 RGB 64GB', 'Samsung 980 PRO 1TB NVMe SSD'],
  },
  {
    id: 'ORD-901',
    customerName: 'Emma Wilson',
    status: 'Processing',
    deliveryDate: 'TBD',
    items: ['Sony WH-1000XM5 Headphones', 'WorkStream Pro Laptop', 'WD My Passport 2TB External HDD'],
  },
  {
    id: 'ORD-912',
    customerName: 'Frank Chen',
    status: 'Delivered',
    deliveryDate: '2025-12-10',
    items: ['HyperX Cloud II Gaming Headset', 'DeathGrip RGB Gaming Mouse', 'MechMaster RGB Keyboard'],
  },
  {
    id: 'ORD-923',
    customerName: 'Grace Park',
    status: 'Shipped',
    deliveryDate: '2025-12-17',
    items: ['Intel Core i5-13400 Processor', 'Kingston ValueRAM 16GB', 'Crucial MX500 1TB SATA SSD', 'Logitech H390 USB Headset'],
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'P-001',
    name: 'Titan GT Gaming Laptop',
    category: 'Laptop',
    tags: ['gaming', 'high-performance'],
    price: 450000,
  },
  {
    id: 'P-002',
    name: 'WorkStream Pro Laptop',
    category: 'Laptop',
    tags: ['office', 'productivity', 'lightweight'],
    price: 270000,
  },
  {
    id: 'P-003',
    name: 'MechMaster RGB Keyboard',
    category: 'Keyboard',
    tags: ['gaming', 'mechanical'],
    price: 36000,
  },
  {
    id: 'P-004',
    name: 'ErgoType Silent Keyboard',
    category: 'Keyboard',
    tags: ['office', 'ergonomic'],
    price: 2500,
  },
  {
    id: 'P-005',
    name: 'Visionary 4K Monitor',
    category: 'Monitor',
    tags: ['office', 'creative'],
    price: 120000,
  },
  {
    id: 'P-006',
    name: 'SpeedFrame 240Hz Monitor',
    category: 'Monitor',
    tags: ['gaming', 'esports'],
    price: 105000,
  },
  {
    id: 'P-007',
    name: 'ProClick Wireless Mouse',
    category: 'Mouse',
    tags: ['office', 'productivity'],
    price: 10500,
  },
  {
    id: 'P-008',
    name: 'DeathGrip RGB Gaming Mouse',
    category: 'Mouse',
    tags: ['gaming', 'high-performance'],
    price: 19500,
  },
  {
    id: 'P-009',
    name: 'Intel Core i9-13900K Processor',
    category: 'Processor',
    tags: ['gaming', 'high-performance'],
    price: 176700,
  },
  {
    id: 'P-010',
    name: 'Intel Core i5-13400 Processor',
    category: 'Processor',
    tags: ['office', 'productivity'],
    price: 66000,
  },
  {
    id: 'P-011',
    name: 'AMD Ryzen 9 7950X Processor',
    category: 'Processor',
    tags: ['gaming', 'high-performance'],
    price: 209700,
  },
  {
    id: 'P-012',
    name: 'Corsair Vengeance RGB 32GB RAM',
    category: 'RAM',
    tags: ['gaming', 'high-performance'],
    price: 42000,
  },
  {
    id: 'P-013',
    name: 'Kingston ValueRAM 16GB',
    category: 'RAM',
    tags: ['office', 'productivity'],
    price: 16500,
  },
  {
    id: 'P-014',
    name: 'G.Skill Trident Z5 RGB 64GB',
    category: 'RAM',
    tags: ['gaming', 'high-performance'],
    price: 84000,
  },
  {
    id: 'P-015',
    name: 'Seagate Barracuda 2TB HDD',
    category: 'Hard Disk Drive',
    tags: ['office', 'storage'],
    price: 19500,
  },
  {
    id: 'P-016',
    name: 'Western Digital Blue 4TB HDD',
    category: 'Hard Disk Drive',
    tags: ['office', 'storage'],
    price: 28500,
  },
  {
    id: 'P-017',
    name: 'Samsung 980 PRO 1TB NVMe SSD',
    category: 'SSD',
    tags: ['gaming', 'high-performance'],
    price: 36000,
  },
  {
    id: 'P-018',
    name: 'Crucial MX500 1TB SATA SSD',
    category: 'SSD',
    tags: ['office', 'productivity'],
    price: 25500,
  },
  {
    id: 'P-019',
    name: 'WD Black SN850X 2TB NVMe SSD',
    category: 'SSD',
    tags: ['gaming', 'high-performance'],
    price: 60000,
  },
  {
    id: 'P-020',
    name: 'Kingston A400 500GB SATA SSD',
    category: 'SSD',
    tags: ['office', 'budget'],
    price: 13500,
  },
  {
    id: 'P-021',
    name: 'Seagate Backup Plus 5TB External HDD',
    category: 'External Hard Drive',
    tags: ['office', 'storage'],
    price: 39000,
  },
  {
    id: 'P-022',
    name: 'WD My Passport 2TB External HDD',
    category: 'External Hard Drive',
    tags: ['office', 'portable'],
    price: 22500,
  },
  {
    id: 'P-023',
    name: 'SanDisk Extreme 1TB External SSD',
    category: 'External Hard Drive',
    tags: ['gaming', 'portable', 'high-performance'],
    price: 42000,
  },
  {
    id: 'P-024',
    name: 'HyperX Cloud II Gaming Headset',
    category: 'Headphones',
    tags: ['gaming', 'high-performance'],
    price: 29700,
  },
  {
    id: 'P-025',
    name: 'Sony WH-1000XM5 Headphones',
    category: 'Headphones',
    tags: ['office', 'premium'],
    price: 114000,
  },
  {
    id: 'P-026',
    name: 'Logitech H390 USB Headset',
    category: 'Headphones',
    tags: ['office', 'productivity'],
    price: 12000,
  },
  {
    id: 'P-027',
    name: 'SteelSeries Arctis 7+ Wireless',
    category: 'Headphones',
    tags: ['gaming', 'wireless'],
    price: 51000,
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
    - **IMPORTANT**: All product prices are in Sri Lankan Rupees (LKR). Always display prices with "Rs." currency notation.
4.  **Returns**: 
    - Policy: "Returns are allowed within 7 days of delivery for full refunds on undamaged items."
    - Do not make up other policies.
5.  **Tone**: Friendly, professional, and concise.

Always check if you need to call a tool to answer the question.
`;