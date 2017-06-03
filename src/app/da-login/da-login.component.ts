import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { UserService } from "../shared/services/user.service";
import { Router } from '@angular/router';
import { moveIn } from '../shared/animations/routes';

@Component({
  selector: 'app-da-login',
  templateUrl: './da-login.component.html',
  styleUrls: ['./da-login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class DaLoginComponent implements OnInit {

    @Output() authChosen = new EventEmitter<any[]>();
    error: any;

    constructor(private authService: AuthService, private router:Router, public userService:UserService) {
        this.authService.authenticated
    }

    ngOnInit() {

    }
    ngDoCheck(){
        let signedIn = this.authService.authenticated;
        console.log('checking...');
        if (signedIn){
            this.postSignIn();
        }
    }


    loginGoogle(): void {
        this.authService.signInWithGoogle()
          .then( () => this.postSignIn() )
          .catch(err => {this.error = err ;console.log('ERROR @ AuthService#signIn() :', err)});
    }

    loginFb(): void {
        this.authService.signInWithFacebook()
          .then( () => this.postSignIn() )
          .catch(err => {this.error = err; console.log('ERROR @ AuthService#signIn() :', err)});
    }
    loginTwitter(): void {
        this.authService.signInWithTwitter()
            .then(() => this.postSignIn() )
            .catch(err => {this.error = err; console.log('ERROR @ AuthService#signIn() :', err)});
    }
    loginAnon(): void {
        this.authService.signInAnonymously()
            .then(() => this.postSignIn() )
            .catch(err => {this.error = err; console.log('ERROR @ AuthService#signIn() :', err)});
    }
    private postSignIn(): void {
        // Do after login stuff here, such as router redirects, toast messages, etc.
        let deets = this.authService.authDetails;
        // let socialId = deets['uid'];
        console.log(deets);
        //1. let nav bar hand photoURL and displayName
        //2. check if user is in DB by ID, if not create empty Userclass, if so, update (a) login count by 1 and (b) profKarma
        this.userService.doesUserExist(deets);
        // deets['auth']['displayName'];
        // deets['auth']['photoURL'];
        this.router.navigate(['create']);
    }


}
