import {Component, Injector, OnInit} from '@angular/core';
import { Categories } from '../../services/Categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [Categories]
})
export class CategoriesComponent implements OnInit {
  categories: any;
  selected: string;
  constructor(private injector: Injector) {}

  ngOnInit() {
    const self = this;
    const categories = this.injector.get(Categories);
    categories.getCategories()
      .then(function (response) {
        self.categories = response;
    }).catch(function (error) {
       console.log(error);
    });
  }

}
