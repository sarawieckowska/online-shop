import { Component, Injector, OnInit } from '@angular/core';
import { Products } from '../../services/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [Products]
})
export class ProductsComponent implements OnInit {
  // database for sorting
  /*public items = [
    {'price': 18, 'title': 'blouse'},
    {'price': 13, 'title': 'coat'},
    {'price': 28, 'title': 'shirt'},
    {'price': 17, 'title': 'shoes'},
    {'price': 38, 'title': 'watch'}];
  public display: any = [];*/
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
    // sorting items
    /*this.display = this.items.sort((a, b) => b.price - a.price);*/
  }
}
