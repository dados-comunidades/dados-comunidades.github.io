import { Routes, RouterModule } from "@angular/router";
// import { DaCreateComponent } from "../da-create/da-create.component";
// import { DaGalleryComponent } from "../da-gallery/da-gallery.component";
// import { DaUsersComponent } from "../da-users/da-users.component";
// import { DaLoginComponent } from "../da-login/da-login.component";
import { LeafletMapComponent } from "../da-create/leaflet/leaflet-map.component";

// import { USER_ROUTES } from "../da-users/user.routes";
// import { GALLERY_ROUTES } from "../da-gallery/gallery.routes";

const APP_ROUTES: Routes = [
  { path: 'map', component: LeafletMapComponent },
  // { path: 'create/:id', component: LeafletMapComponent },
  // { path: 'create/:id/edit', component: LeafletMapComponent },
  // { path: 'gallery', component: DaGalleryComponent, children: GALLERY_ROUTES },
  // { path: 'user', component: DaUsersComponent, children: USER_ROUTES },
  // { path: 'login', component: DaLoginComponent },
  { path: '**', redirectTo: 'map' }
];

export const main_routes = RouterModule.forRoot(APP_ROUTES);
