import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
import { AuthService } from "../../shared/services/auth.service";
import { UserProfile } from "../../shared/classes/user-profile";

import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
  styleUrls: ['../da-users.component.css']
})
export class UserAboutComponent implements OnInit {

    private profile: UserProfile;
    selectedProfile: UserProfile;
    private profileIndex: number;
    private socialId: string;
    private subscription: Subscription;

    constructor(private userService: UserService, private authService: AuthService, private route: ActivatedRoute, private router:Router) {

    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
          (params: any) => {

            if (params['id']){
                this.socialId = params['id'];
            } else {
                this.socialId = this.userService.currentUserDbKey;
            }
            this.profile = this.userService.currentUser;
          }
        );
    }

    ngDoCheck(){
        if (!this.profile){
            this.profile = this.userService.currentUser;
        }
        if (!this.socialId){
            this.socialId = this.userService.currentUserDbKey;
        }
    }

    onEditProfile() {
      this.router.navigate(['/user/profile', this.socialId, 'edit']);
    }

    ngOnDestroy() {
       this.subscription.unsubscribe();
     }
}
