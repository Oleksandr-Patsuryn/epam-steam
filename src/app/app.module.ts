import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ValidatorService } from './validator.service';
import { RegComponent } from './components/reg/reg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ValidatorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
