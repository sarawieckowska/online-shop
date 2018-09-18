import { Component, Injector, OnInit } from '@angular/core';
import { Products } from '../../services/Products';
import { WindowRef } from '../../services/windowRef';
import { BasketService } from '../../services/Basket';
import { IProduct } from '../../interfaces/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [BasketService]
})
export class ProductsComponent implements OnInit {
  window: WindowRef;
  products: any;
  public productGender = '';
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
      product.inBasket = true;
      this.basketService.add(product);
    }
  // sorting items
    mostPopular(): any {
    this.products.sort(function() {
      return 0.5 - Math.random();
    });
    }
    lowestPrice(): any {
      this.products.sort((a, b) => a.price - b.price);
    }
    highestPrice(): any {
    this.products.sort((a, b) => b.price - a.price);
    }
  // filter items
    showMen() {
      this.productGender = 'men';
    }
    showWomen() {
      this.productGender = 'women';
    }
    showAll() {
      this.productGender = 'men || women';
    }
}
