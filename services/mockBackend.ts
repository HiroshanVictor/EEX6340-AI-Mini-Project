import { MOCK_ORDERS, MOCK_PRODUCTS } from '../constants';
import { Order, Product } from '../types';

/**
 * Simulates a database lookup for an order.
 */
export const findOrder = (orderId: string): Order | null => {
  const normalizedId = orderId.trim().toUpperCase();
  return MOCK_ORDERS.find((o) => o.id === normalizedId) || null;
};

/**
 * Simulates a database search for products.
 */
export const searchProducts = (category: string | undefined, usage: string | undefined): Product[] => {
  return MOCK_PRODUCTS.filter((product) => {
    let match = true;
    
    if (category) {
        match = match && product.category.toLowerCase().includes(category.toLowerCase());
    }

    if (usage) {
        // Simple tag matching logic
        const usageLower = usage.toLowerCase();
        if (usageLower.includes('game') || usageLower.includes('gaming')) {
            match = match && product.tags.includes('gaming');
        } else if (usageLower.includes('work') || usageLower.includes('office')) {
            match = match && (product.tags.includes('office') || product.tags.includes('productivity'));
        }
    }
    
    return match;
  });
};