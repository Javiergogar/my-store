import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = []; // Necesitamos darle el tipo para que no sea un array de "any" y si sea de Product
  // product: Product = new Product() Esto seria redundante

  constructor() { }

  addToCart(product: Product) { this.items.push(product); }
  getItems() { return this.items; }
  clearCart() { this.items = []; return this.items; }

}
