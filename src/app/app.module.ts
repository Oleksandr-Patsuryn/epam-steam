import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HeaderComponent} from './components/header/header.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AppRoutingModule} from "./app-routing.module";
import {FriendModule} from "./components/friend/friend.module"
import {GamesComponent} from "./components/games/games.component";
import {LibraryComponent} from "./components/library/library.component";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./components/users.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    GamesComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FriendModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
