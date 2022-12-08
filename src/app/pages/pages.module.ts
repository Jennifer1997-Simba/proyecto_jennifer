import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from '../auth/login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent, //sale error porque se los debe importar
    ProductComponent,
    CatalogueComponent,
    LoginComponent,
    PagesComponent

  ],

  exports: [ //para que se usen fuera de este modulo
DashboardComponent,
ProductComponent,
CatalogueComponent,
LoginComponent,
PagesComponent

],

  imports: [

    CommonModule,
   SharedModule,
   PagesRoutingModule,
   RouterModule

  ],
})
export class PagesModule { }
