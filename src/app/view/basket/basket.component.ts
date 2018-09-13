import { Component, OnInit, Injector } from '@angular/core';
import { Products } from '../../services/Products';
import { WindowRef } from '../../services/windowRef';
import { BasketService } from '../../services/Basket';
import { IProduct } from '../../interfaces/products';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  providers: [Products]
})
export class BasketComponent implements OnInit {
  window: WindowRef;
  products: any;
  constructor(private injector: Injector, private basketService: BasketService) {
    this.window = new WindowRef();
  }
  ngOnInit() {
    // products backend
    const self = this;
    const products = this.injector.get(Products);
    products.getProducts()
      .then(function (response) {
        self.products = response;
      }).catch(function (error) {
      console.log(error);
    });
  }
  // scroll to top
  goBack(): void {
    this.window.nativeWindow.scrollTo(0, 0);
  }
  addItemToBasket(product: IProduct): void {
    this.basketService.add(product);
  }
}
