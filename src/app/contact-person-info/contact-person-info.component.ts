import { Component, OnInit } from '@angular/core';

import { FormCategoryComponent } from '../form-category/form-category.component'

//this would be fed into the form dynamically
const contactTypes = [{'name':'commercial', 'display': 'Commercial'},
  {'name':'logistics','display': 'Logistics'},
 {'name':'finance', 'display':  'Finance / Accounting'},
  {'name': 'shareholder','display':'Major Shareholder'},
  {'name': 'signatory', 'display':'Authorized Signatory'},
  {'name': 'other', 'display': 'Other'}];

@Component({
  selector: 'app-contact-person-info',
  templateUrl: './contact-person-info.component.html',
  styleUrls: ['./contact-person-info.component.scss']
})
export class ContactPersonInfoComponent implements FormCategoryComponent {
  contactTypes: Array<{}> = contactTypes;

  constructor() { 
  }

  ngOnInit() {
  }

}
