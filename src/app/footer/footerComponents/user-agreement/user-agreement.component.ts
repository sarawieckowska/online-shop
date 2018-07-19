import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.scss']
})
export class UserAgreementComponent implements OnInit {

  constructor(
    private location: Location
  ) {}

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
