import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HeaderComponent} from './components/header/header.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ProfileWrapperComponent} from './components/profile-wrapper/profile-wrapper.component';
import {AppRoutingModule} from "./app-routing.module";
import {FriendModule} from "./components/friend/friend.module"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FriendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
