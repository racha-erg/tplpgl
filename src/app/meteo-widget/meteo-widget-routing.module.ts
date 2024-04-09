import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MeteoWidgetPage } from './meteo-widget.page';

const routes: Routes = [
  {
    path: '',
    component: MeteoWidgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class MeteoWidgetPageRoutingModule {}
