import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HeaderComponent} from './components/header/header.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AppRoutingModule} from "./app-routing.module";
import {GamesComponent} from "./components/games/games.component";
import {LibraryComponent} from "./components/library/library.component";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./service/users.service";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./pipes/search.pipe";
import {GamesService} from "./service/games.service";
import {FriendComponent} from "./components/friend/friend.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    GamesComponent,
    FriendComponent,
    LibraryComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService, GamesService],
  exports: [
    SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
