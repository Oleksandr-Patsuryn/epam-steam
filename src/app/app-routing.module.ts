import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {ProfileComponent} from "./components/profile/profile.component";
import {FriendComponent} from "./components/friend/friend.component";


const appRoutes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'friends', component: FriendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
