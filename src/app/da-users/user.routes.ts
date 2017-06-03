import { Routes, RouterModule } from "@angular/router";
import { UserContactComponent } from "./user-components/user-contact.component";
import { UserWorkComponent } from "./user-components/user-work.component";
import { UserAboutComponent } from "./user-components/user-about.component";
import { UserFeedComponent } from "./user-components/user-feed.component";
import { UserEditComponent } from "./user-components/user-edit.component";

export const USER_ROUTES: Routes = [
  { path: 'profile', component: UserAboutComponent },
  { path: 'contacts', component: UserContactComponent },
  { path: 'resources', component: UserWorkComponent },
  { path: 'activity', component: UserFeedComponent },
  { path: 'profile/:id', component: UserAboutComponent },
  { path: 'profile/:id/edit', component: UserEditComponent },
  { path: '**', redirectTo: "profile" }
];
