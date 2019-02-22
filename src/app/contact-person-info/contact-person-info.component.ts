import { Component, OnInit } from '@angular/core';

import { FormCategoryComponent } from '../form-category/form-category.component'

@Component({
  selector: 'app-contact-person-info',
  templateUrl: './contact-person-info.component.html',
  styleUrls: ['./contact-person-info.component.scss']
})
export class ContactPersonInfoComponent implements FormCategoryComponent {

  constructor() { }

  ngOnInit() {
  }

}
