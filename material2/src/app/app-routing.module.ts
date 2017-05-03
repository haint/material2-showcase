import { RouterModule } from '@angular/router';
import { SimpleComponent } from "app/simple-form/simple.component";
import { AutoCompleteComponent } from "app/auto-complete/auto-complete.component";
import { CheckboxComponent } from "app/checkbox/checkbox.component";
import { NgModule } from "@angular/core";
import { InputComponent } from "app/input/input.component";
import { SlideToggleComponent } from "app/slide-toggle/slide-toggle.component";
import { MenuComponent } from "app/menu/menu.component";
import { SidenavComponent } from "app/sidenav/sidenav.component";
import { ToolbarComponent } from "app/toolbar/toolbar.component";
import { ListComponent } from "app/list/list.component";
import { GridListComponent } from "app/grid-list/grid-list.component";
import { CardComponent } from "app/card/card.component";
import { TabsComponent } from "app/tabs/tabs.component";
import { ButtonComponent } from "app/button/button.component";
import { ButtonToggleComponent } from "app/button-toggle/button-toggle.component";
import { ChipsComponent } from "app/chips/chips.component";
import { SvgComponent } from "app/svg/svg.component";
import { ProgressSpinnerComponent } from "app/progress-spinner/progress-spinner.component";
import { ProgressBarComponent } from "app/progress-bar/progress-bar.component";
import { RadioComponent } from "app/radio/radio.component";
import { SelectComponent } from "app/select/select.component";
import { SliderComponent } from "app/slider/slider.component";

const routes = [
  { path: '', redirectTo: '/simple', pathMatch: 'full' },
  { path: 'simple', component: SimpleComponent },
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'input', component: InputComponent },
  { path: 'slide-toggle', component: SlideToggleComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'list', component: ListComponent },
  { path: 'grid-list', component: GridListComponent },
  { path: 'card', component: CardComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'svg', component: SvgComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'select', component: SelectComponent },
  { path: 'slider', component: SliderComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}