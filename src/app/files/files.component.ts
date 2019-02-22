import { Component, OnInit } from '@angular/core';

import { FormCategoryComponent } from '../form-category/form-category.component'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements FormCategoryComponent {

  constructor() { }

  ngOnInit() {
  }

}
