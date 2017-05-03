import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from 'app/mail.service';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MaterialModule } from '@angular/material';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SimpleComponent } from "app/simple-form/simple.component";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { InputComponent } from './input/input.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

@NgModule({
  declarations: [
    SimpleComponent,
    SimpleFormComponent,
    AutoCompleteComponent,
    CheckboxComponent,
    AppComponent,
    InputComponent,
    SlideToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: 'mail', useClass: MailService },
    { provide: 'api', useValue: 'http://localhost:3000'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
