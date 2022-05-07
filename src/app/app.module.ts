import { NgModule } from '@angular/core';
//RUTAS

import { APP_ROUTES   } from './app.routes';


//Modulos
import { PagesModule } from './pages/pages/pages.module';
PagesModule

import { BrowserModule } from '@angular/platform-browser';


//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   // NopagefoundComponent,
    //DashboardComponent,
  //  ProgressComponent,
  //  Graficas1Component,
    //HeaderComponent,
   // SidebarComponent,
   // BreadcrumbsComponent,
  //  PagesComponent,

  ],


  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
