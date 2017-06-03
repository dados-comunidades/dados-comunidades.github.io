import { Injectable, EventEmitter } from '@angular/core';
import { UserProfile } from '../classes/user-profile';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { ActivityService } from "./activity.service";

@Injectable()
export class UserService {

  constructor( private http: Http, private activity:ActivityService ) { }

  public currentUser:UserProfile;
  public currentUserDbKey:string;

  createEmptyUserInstance(deets:Object):UserProfile {
      let newUser = {
          socialId: deets['uid'],
          nameFirst: deets['auth']['displayName'].split(' ')[0],
          nameLast: deets['auth']['displayName'].split(' ')[1],
          email: '',
          location: '',
          profType: '',
          profDesc: '',
          profImg: deets['auth']['photoURL'],
          profKarma: 0,
          loginCount: 0,
          maps: [],
          dateCreated: new Date()
     }
      return newUser;
  }

  assignUser(deets:Object): void{
      let allUsers = this.http.get('https://intense-torch-2531.firebaseio.com/users.json')
          .map( (response: Response) => response.json() )
          .catch(this.handleError);
      allUsers.forEach((value: any) => {
          for (let keyId in value){
              //looping through existing user objects to find unique socialId from twitter,fb,etc
              if (value[keyId]['socialId'] == deets['uid']){
                  this.currentUser = value[keyId];
                  this.currentUserDbKey = keyId;
              }
          }});
  }

  doesUserExist(deets:Object): void{
    let found = false;
    let allUsers = this.http.get('https://intense-torch-2531.firebaseio.com/users.json')
        .map( (response: Response) => response.json() )
        .catch(this.handleError);

    allUsers.forEach((value: any) => {
        for (let keyId in value){
            //looping through existing user objects to find unique socialId from twitter,fb,etc
            if (value[keyId]['socialId'] == deets['uid']){
                found = true;
                this.currentUser = value[keyId];
                this.currentUserDbKey = keyId;
            }
        }
        if (found){
            //welcome back
            console.log('welcome back user!!!');
            //karma +1
            this.currentUser.profKarma = this.currentUser.profKarma + 1;
            this.updateUserInfo(this.currentUser)
                .subscribe((data: any) =>
                  {
                      console.log(data);
                      console.log('added karma plus 1!');
                  });
        } else {
            //create new user & post to database
            let newUser = this.createEmptyUserInstance(deets);
            this.currentUser = newUser;
            this.postUserToDB(newUser)
                .subscribe((data: any) =>
                  {
                    //enable
                    this.currentUserDbKey = data['name'];
                    console.log('....created new user in firebase');
                  }
              );
        }
    });
  }

  //post method is used to ADD and UPDATE
  postUserToDB( User: UserProfile ){
      console.log('posting user to db...');
      // make post
      const body = JSON.stringify(User);
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      ///http.put is a better method because it OVERWRITES, can be used as an editMethod()
      this.activity.postActivity('new user created').subscribe((data:any)=>{ console.log('activity logged...')});
      return this.http.post('https://intense-torch-2531.firebaseio.com/users.json', body, {
          headers: headers
      })
        .map( ( data: Response) => data.json())
        .catch(this.handleError);
  }

  updateUserInfo( User: UserProfile){
        //update the current user
        this.currentUser = User;
        console.log('updating user in db...');
        let userKey = this.currentUserDbKey;
        const body = JSON.stringify(User);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        ///http.put is a better method because it OVERWRITES, can be used as an editMethod()
        this.activity.postActivity('user updated').subscribe((data:any)=>{ console.log('activity logged...')});
        return this.http.put('https://intense-torch-2531.firebaseio.com/users/'+this.currentUserDbKey+'.json', body, {
          headers: headers
        })
            .map( ( data: Response) => data.json())
            .catch(this.handleError);
  }

  //fetch user details by ID
  fetchUserById(key:string) {
      return this.http.get('https://intense-torch-2531.firebaseio.com/users/'+key+'.json')
          .map( (response: Response) => response.json())
          .catch(this.handleError);
  }

  updateKarma(){

  }
  private handleError(err:any){
      console.log(err);
      return Observable.throw(err);
  }
}
