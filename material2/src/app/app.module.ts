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
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ChipsComponent } from './chips/chips.component';
import { SvgComponent } from './svg/svg.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    SimpleComponent,
    SimpleFormComponent,
    AutoCompleteComponent,
    CheckboxComponent,
    AppComponent,
    InputComponent,
    SlideToggleComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    ListComponent,
    GridListComponent,
    CardComponent,
    TabsComponent,
    ButtonComponent,
    ButtonToggleComponent,
    ChipsComponent,
    SvgComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent
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
