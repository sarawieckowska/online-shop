import { Component, Injector, OnInit } from '@angular/core';
import { Product } from '../../services/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [Product]
})
export class ProductsComponent implements OnInit {
  product: any;
  constructor(private injector: Injector) { }

  ngOnInit() {
    const self = this;
    const products = this.injector.get(Product);
    products.getProducts()
      .then(function (response) {
        self.product = response;
      }).catch(function (error) {
      console.log(error);
    });
  }

}
