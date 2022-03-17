import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {ProfileComponent} from "./components/profile/profile.component";
import {FriendComponent} from "./components/friend/friend.component";
import {LibraryComponent} from "./components/library/library.component";
import {GamesComponent} from "./components/games/games.component";
import {LoginComponent} from "./components/login/login.component";
import {RegComponent} from "./components/reg/reg.component";



const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'games', component: GamesComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'friends', component: FriendComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'registration', component: RegComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
