import { Component, OnInit, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() type: string;
  @Input() name: string;
  @Input() display: string = this.name;
  @Input() required: boolean = false;
  constructor() { }


  ngOnInit() {
  }

}