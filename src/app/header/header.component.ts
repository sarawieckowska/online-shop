import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { CategoriesComponent } from '../view/categories/categories.component';
import { Search } from '../services/Search';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Products } from '../services/Products';
import { IProduct } from '../interfaces/products';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [Search]
})
export class HeaderComponent implements OnInit {
products: any;
public model: any;
  @ViewChild(CategoriesComponent) categories;
  searchText: string;
  _search: Search;
  search(text: string): void {
    console.log(text, this.categories.selected);
    this._search.getItems({text: text, category: this.categories.selected})
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
    });
  }
  constructor(private injector: Injector) { }

  ngOnInit() {
    this._search = this.injector.get(Search);
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
  searchAhead = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.products.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
}
