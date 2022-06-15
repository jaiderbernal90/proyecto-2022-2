import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LoginComponent } from './views/auth/pages/login/login.component';
import { RegisterComponent } from './views/auth/pages/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { BodyComponent } from './views/auth/components/body/body.component';
import { SideComponent } from './views/base/side/side.component';
import { HeaderComponent } from './views/base/header/header.component';
import { MainComponent } from './views/base/main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BodyComponent,
    SideComponent,
    HeaderComponent,
    MainComponent
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
