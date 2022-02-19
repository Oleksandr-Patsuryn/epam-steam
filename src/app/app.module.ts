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
import {UsersService} from "./service/users.service";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./pipes/search.pipe";
import {GamesService} from "./service/games.service";
import { ValidatorService } from './validator.service';
import { RegComponent } from './components/reg/reg.component';
import {FriendsService} from "./service/friends.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    HeaderComponent,
    ProfileComponent,
    GamesComponent,
    LibraryComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FriendModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ValidatorService, UsersService, GamesService, FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
