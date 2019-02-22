import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { GeneralBusinessInfoComponent } from './general-business-info/general-business-info.component';
import { ContactPersonInfoComponent } from './contact-person-info/contact-person-info.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { FilesComponent } from './files/files.component';

const routes: Routes = [
  { path: '', component: FormComponent,
    children: [
        { path: '', redirectTo: 'general', pathMatch: 'prefix' },
        { path: 'general', component:  GeneralBusinessInfoComponent },
        { path: 'contact', component:  ContactPersonInfoComponent },
        { path: 'bank', component:  BankInfoComponent },
        { path: 'files', component: FilesComponent } 
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
