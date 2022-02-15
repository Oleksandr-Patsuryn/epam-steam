import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FriendComponent} from "./friend.component";
import {FriendListComponent} from "./friend-list/friend-list.component";
import {FriendSerchComponent} from "./friend-serch/friend-serch.component";


@NgModule({
  declarations: [
    FriendComponent,
    FriendListComponent,
    FriendSerchComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class FriendModule {
}
