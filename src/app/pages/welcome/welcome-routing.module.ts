import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookWritingComponent } from './book-writing/book-writing.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent , children:[
    {path:'', component:BookWritingComponent},
    {path:'submission', component:SubmitFormComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
