import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, NavigationStart } from "@angular/router";
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState  } from 'angularfire2';

@Injectable()
export class AuthService {


    private authState: FirebaseAuthState = null;
    private authInfo: any;
    error: any;

    constructor(public af: AngularFire, public router:Router) {
        this.af.auth.subscribe((state: FirebaseAuthState) => {
          this.authState = state;
        });
    }
    get authenticated(): boolean {
            // return true;
        return this.authState !== null;
    }

    get authDetails(): Object {
        return this.authState;
        // return this.authenticated ? this.authState.uid : '';
    }

    signIn(provider: number): firebase.Promise<FirebaseAuthState> {
        return this.af.auth.login({provider})
    }

    signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
        return this.signIn(AuthProviders.Google);
    }

    signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
        return this.signIn(AuthProviders.Facebook);
    }

    signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
        return this.signIn(AuthProviders.Twitter);
    }
    signInAnonymously(): firebase.Promise<FirebaseAuthState> {
        return this.af.auth.login({
          provider: AuthProviders.Anonymous,
          method: AuthMethods.Anonymous,
        })
    }

    signOut() {
        return this.af.auth.logout();
        // return 'done';
    }

}
