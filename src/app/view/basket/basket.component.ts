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
  products: Array<IProduct>;
  constructor(private injector: Injector, private basketService: BasketService) {
    this.window = new WindowRef();
  }
  ngOnInit() {
    const self = this;
    self.products = this.basketService.getBasket().products;
    console.log(self);
  }
  // scroll to top
  goBack(): void {
    this.window.nativeWindow.scrollTo(0, 0);
  }
}
