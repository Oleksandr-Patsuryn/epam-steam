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
import {FormsModule} from '@angular/forms';
import {RegComponent} from './components/reg/reg.component';

import {AddUserService} from 'src/app/add-user-service';
import {CookiesService} from 'src/app/cookies.service';
import {GamesService} from "./service/games.service";
import {FriendComponent} from "./components/friend/friend.component";
import {SearchPipe} from "./pipes/search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegComponent,
    ProfileComponent,
    GamesComponent,
    FriendComponent,
    LibraryComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    UsersService,
    GamesService,
    AddUserService,
    CookiesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
