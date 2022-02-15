import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileWrapperComponent } from './components/profile-wrapper/profile-wrapper.component';
import { FriendComponent } from './components/friend/friend.component';
import { FriendSerchComponent } from './components/friend-serch/friend-serch.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileWrapperComponent,
    FriendComponent,
    FriendSerchComponent,
    FriendListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
