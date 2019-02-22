import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() name: string;
  @Input() display: string = this.name;
  @Input() required: boolean = false;
  @Input() options: Array<{val: string, name: string}> = [];

  formValue: any;
  @ViewChild('textarea') textarea;

  @Output() valueChanged = new EventEmitter<any>();

  constructor() { 
      if(this.type == 'date'){
        this.formValue = new Date().toString();
      }
      else if(this.type == 'text'){
        this.formValue = '';
      }
  }

  valueChange(){
      this.valueChanged.emit(this.formValue);

      
  }

  adjustSize(){
    if(this.textarea){
      let el = this.textarea.nativeElement;
      el.style.height = el.scrollHeight + 2 + 'px';
    }
  }

  ngOnInit() {
  }

}