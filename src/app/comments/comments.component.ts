import { Component, OnInit } from '@angular/core';

import { FormCategoryComponent } from '../form-category/form-category.component'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements FormCategoryComponent {

  constructor() { }

  ngOnInit() {
  }

}
