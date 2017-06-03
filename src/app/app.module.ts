/// <reference path="../typings/require.d.ts"/>
/// <reference path="../typings/leaflet.vectorgrid.d.ts"/>

// Angular2 Third-Party
import "leaflet";
import "leaflet.vectorgrid";
import "leaflet-draw";
import "@asymmetrik/angular2-leaflet";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { main_routes } from "./shared/main.routes";
// import { AuthService } from "./shared/services/auth.service";
// import { UserService } from "./shared/services/user.service";
// import { ActivityService } from "./shared/services/activity.service";
import { NavComponent } from "./shared/nav/nav.component";

import { AppComponent } from './app.component';
//
// import { DaGalleryComponent } from "./da-gallery/da-gallery.component";
// import { DaUsersComponent } from "./da-users/da-users.component";
// import { UserContactComponent } from "./da-users/user-components/user-contact.component";
// import { UserWorkComponent } from "./da-users/user-components/user-work.component";
// import { UserAboutComponent } from "./da-users/user-components/user-about.component";
// import { UserEditComponent } from "./da-users/user-components/user-edit.component";
// import { UserFeedComponent } from "./da-users/user-components/user-feed.component";
//
//
// import { MapDetailComponent } from "./da-gallery/map-components/map-detail.component";
// import { MapEditComponent } from "./da-gallery/map-components/map-edit.component";
// import { MapAllComponent } from "./da-gallery/map-components/map-all.component";
//
//
// import { DaLoginComponent } from "./da-login/da-login.component";
// import { FileNamePipe } from "./shared/filterName.pipe";

import { LeafletMappingModule } from './da-create/leaflet/leaflet-mapping.module';

/* third party fun */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFireModule, AuthMethods } from 'angularfire2';
//
// export const firebaseConfig = {
//   apiKey: "AIzaSyB55S_7WFCu19drRo_4bNq-YzZdRbGM6bk",
//   authDomain: "intense-torch-2531.firebaseapp.com",
//   databaseURL: "https://intense-torch-2531.firebaseio.com",
//   projectId: "intense-torch-2531",
//   storageBucket: "intense-torch-2531.appspot.com",
//   // messagingSenderId: "316955783479"
// };
// const firebaseAuthConfig = {
//   method: AuthMethods.Popup,
//   remember: 'default'
// };

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        // DaGalleryComponent,
        // DaUsersComponent,
        // UserFeedComponent,
        // DaLoginComponent,
        // FileNamePipe,
        // UserContactComponent,
        // UserWorkComponent,
        // UserAboutComponent,
        // UserEditComponent,
        // MapAllComponent,
        // MapEditComponent,
        // MapDetailComponent
    ],
    imports: [
      HttpModule,
    //   FormsModule,
    //   ReactiveFormsModule,
      BrowserModule,
      NgbModule.forRoot(),
    //   AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
      LeafletMappingModule,
      main_routes
    ],
    // providers: [ AuthService, UserService, ActivityService ],
    bootstrap: [AppComponent]
})

export class AppModule { }
