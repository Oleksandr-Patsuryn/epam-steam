import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FriendComponent } from './components/friend/friend.component';
import { FriendSerchComponent } from './components/friend-serch/friend-serch.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';

@NgModule({
  declarations: [
    AppComponent,
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
