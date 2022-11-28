import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';




const routes:Routes = [ // routes se importa de @angularRoutes
{path:'**', component: NopagesfoundComponent},//cualquier
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    


  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
