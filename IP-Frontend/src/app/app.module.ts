import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DatePersonaleComponent } from './user-profile/date-personale/date-personale.component';
import { DateVitaleComponent } from './user-profile/date-vitale/date-vitale/date-vitale.component';
import { AuthInterceptor } from './core/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { DateMedicaleComponent } from './user-profile/date-medicale/date-medicale.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'test.mosquitto.org',
  port: 8081,
  path: '/mqtt'
};

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      NavbarComponent,
      UserProfileComponent,
      DatePersonaleComponent,
      DateVitaleComponent,
      DateMedicaleComponent,
      LoginComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
