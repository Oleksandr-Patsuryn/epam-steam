import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {ProfileComponent} from "./components/profile/profile.component";
import {FriendComponent} from "./components/friend/friend.component";
import {LibraryComponent} from "./components/library/library.component";
import {GamesComponent} from "./components/games/games.component";


const appRoutes: Routes = [
  {path: '', component: GamesComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'friends', component: FriendComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
