import { Component, OnInit } from '@angular/core';
import {WindowRef} from '../../../services/windowRef';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  window: WindowRef;

  constructor(private route: ActivatedRoute) {
    console.log(route);
    console.log(route.snapshot.params.id);
    this.window = new WindowRef();
  }

  ngOnInit() {
  }
  goBack(): void {
    this.window.nativeWindow.scrollTo(0, 0);
  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'instant', block: 'start', inline: 'nearest'});
  }
}
