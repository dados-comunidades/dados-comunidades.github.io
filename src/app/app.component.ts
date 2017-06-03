import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from "@angular/router";
import { NavComponent } from "./shared/nav/nav.component";
// import { AuthService } from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    start:boolean = false;
    isLoggedIn:boolean = false;

    constructor(private routes:Router
        // private auth: AuthService
    ) { }
        // routes.events.subscribe((event: NavigationStart) => {
        //     if (event.url == "/login"){
        //         this.isLoggedIn = false;
        //     } else {
        //         this.isLoggedIn = true;
        //
        //     }
        // });
      // Other navigation events:
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized

    // }

    // signOut() {
    //     console.log('signing out..')
    //     this.auth.signOut().then( (value:any) =>
    //         {
    //             console.log('done');
    //             this.routes.navigate(['login'])
    //         }
    //     );
    // }
}
