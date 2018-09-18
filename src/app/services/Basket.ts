import { Injectable } from '@angular/core';
import { IBasket } from '../interfaces/basket';
import { IProduct } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket: IBasket = { products: [] };
  getBasket() {
    return this.basket;
  }
  add(product: IProduct) {
    this.basket.products.push(product);
  }
  constructor() {
  }
}
