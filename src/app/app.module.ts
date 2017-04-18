import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from 'app/mail.service';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MaterialModule } from '@angular/material';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    AutoCompleteComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot()
  ],
  providers: [
    { provide: 'mail', useClass: MailService },
    { provide: 'api', useValue: 'http://localhost:3000'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
