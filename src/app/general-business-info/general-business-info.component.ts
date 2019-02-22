import { Component, OnInit } from '@angular/core';
import { FormCategoryComponent } from '../form-category/form-category.component'
import { countries } from '../countries.js';

@Component({
  selector: 'app-general-business-info',
  templateUrl: './general-business-info.component.html',
  styleUrls: ['./general-business-info.component.scss']
})
export class GeneralBusinessInfoComponent implements FormCategoryComponent {

  constructor() { }

  ngOnInit() {
  }

}
