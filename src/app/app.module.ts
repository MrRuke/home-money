import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './old/auth/auth.module';
import { UsersServices } from './old/shared/services/users.services';
import { HttpClientModule } from '@angular/common/http';
import { AuthServices } from './old/shared/services/auth.services';
import { SystemModule } from './old/system/system.module';
import { AuthGuard } from './old/shared/services/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './old/shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    SystemModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    CommonModule,
    UsersServices,
    AuthServices,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
