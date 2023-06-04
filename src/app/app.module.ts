import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardAdminComponent,
    MenuUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
