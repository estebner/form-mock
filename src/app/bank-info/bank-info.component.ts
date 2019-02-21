import { Component, OnInit } from '@angular/core';

import { FormCategoryComponent } from '../form-category/form-category.component'

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements FormCategoryComponent {

  constructor() { }

  ngOnInit() {
  }

}
