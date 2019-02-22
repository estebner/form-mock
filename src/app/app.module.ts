import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { GeneralBusinessInfoComponent } from './general-business-info/general-business-info.component';
import { ContactPersonInfoComponent } from './contact-person-info/contact-person-info.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { FormCategoryComponent } from './form-category/form-category.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormFieldComponent,
    GeneralBusinessInfoComponent,
    ContactPersonInfoComponent,
    BankInfoComponent,
    FormCategoryComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
