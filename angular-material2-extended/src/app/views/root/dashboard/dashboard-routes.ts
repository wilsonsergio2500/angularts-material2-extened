
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component'
import { MainComponent  } from './main/main.component';
import { VanillaFormlyComponent } from './vanilla-formly/vanilla-formly.component';
import { FormlyFieldsTypesComponent } from './formly-fields/formly-fields.component';
import { FormlyLayoutComponent } from './formly-layout/fomly-layout.component';

export const DASHBOARD_ROUTES: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {path: 'main', component: MainComponent },
      {path: 'formlyvanilla', component: VanillaFormlyComponent},
      { path: 'formlyFieldTypes', component: FormlyFieldsTypesComponent},
      { path: 'formlylayout', component: FormlyLayoutComponent}
    ]
  }

]
