import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Response, Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import { AppLayoutComponent } from './common/app-layout/app-layout.component';
import { AuthLayoutComponent } from './common/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './common/header/header.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
   providers: [
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
