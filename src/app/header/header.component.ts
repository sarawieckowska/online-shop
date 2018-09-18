import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { CategoriesComponent } from '../view/categories/categories.component';
import { Search } from '../services/Search';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [Search]
})
export class HeaderComponent implements OnInit {
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
  }
}
