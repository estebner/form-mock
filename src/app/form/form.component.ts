import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {



  constructor(public router: Router) { 
      
  }

  ngOnInit() {

  }

  nextForm() {
    let target;
    if(this.router.url == '/general'){
      target = 'contact';
    }
    else if(this.router.url == '/contact'){
      target = 'bank';
    }
    else if(this.router.url == '/bank'){
      target = 'files';
    }
    if(target){
      this.router.navigateByUrl(target);
    }
  }

  previousForm(){
    let target;
    if(this.router.url == '/contact'){
      target = 'general';
    }
    else if(this.router.url == '/bank'){
      target = 'contact';
    }
    else if(this.router.url == '/files'){
      target = 'bank';
    }
    if(target){
      this.router.navigateByUrl(target);
    }
  }
}
