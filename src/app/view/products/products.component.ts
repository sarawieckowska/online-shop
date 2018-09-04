import { Component, Injector, OnInit } from '@angular/core';
import { Products } from '../../services/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [Products]
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private injector: Injector) { }

  ngOnInit() {
    const self = this;
    const products = this.injector.get(Products);
    products.getProducts()
      .then(function (response) {
        self.products = response;
      }).catch(function (error) {
      console.log(error);
    });
  }

}
