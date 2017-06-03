import { Routes, RouterModule } from "@angular/router";
import { MapDetailComponent } from "./map-components/map-detail.component";
import { MapEditComponent } from "./map-components/map-edit.component";
import { MapAllComponent } from "./map-components/map-all.component";

export const GALLERY_ROUTES: Routes = [
  { path: '', component: MapAllComponent },
  { path: ':id', component: MapDetailComponent },
  { path: ':id/edit', component: MapEditComponent }
];
