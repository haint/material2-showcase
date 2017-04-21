import { RouterModule } from '@angular/router';
import { SimpleComponent } from "app/simple-form/simple.component";
import { AutoCompleteComponent } from "app/auto-complete/auto-complete.component";
import { CheckboxComponent } from "app/checkbox/checkbox.component";
import { NgModule } from "@angular/core";

const routes = [
  { path: '', redirectTo: '/simple', pathMatch: 'full' },
  { path: 'simple', component: SimpleComponent },
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'checkbox', component: CheckboxComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}