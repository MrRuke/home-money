import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {UsersServices} from "./shared/services/users.services";
import {HttpClientModule} from "@angular/common/http";
import {AuthServices} from "./shared/services/auth.services";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [UsersServices, AuthServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
