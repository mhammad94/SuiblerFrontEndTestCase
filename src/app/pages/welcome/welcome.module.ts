import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { BookWritingComponent } from './book-writing/book-writing.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WelcomeComponent, BookWritingComponent, SubmitFormComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
