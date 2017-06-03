import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ActivityService {

    constructor( private http: Http ) { }

    newUser( activity: String ){
        const body = JSON.stringify({
            date: new Date(),
            action: 'joined com',
            userID: '',
            userName: '',
            objectID: '',
            color: '#3cffae',
            icon: '&#xf007'
        });
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        ///http.put is a better method because it OVERWRITES, can be used as an editMethod()
        return this.http.post('https://intense-torch-2531.firebaseio.com/activity.json', body, {
            headers: headers
        })
          .map( ( data: Response) => data.json());
    }

    postActivity( activity: String ){
        console.log('posting user to db...');
        // make post
        const body = JSON.stringify({ date: new Date(), log: activity });
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        ///http.put is a better method because it OVERWRITES, can be used as an editMethod()
        return this.http.post('https://intense-torch-2531.firebaseio.com/activity.json', body, {
            headers: headers
        })
          .map( ( data: Response) => data.json());
    }

    fetchActivity() {
        return this.http.get('https://intense-torch-2531.firebaseio.com/activity.json')
            .map( (response: Response) => response.json())
    }
}

/*
list of actions:
liked map - &#xf004 - #ff3c3c "Nate" "liked a" "map"
saved map - &#xf279 - #3c42ff "Nate" "saved a" "map"
created resource - &#xf02e - #87ff3c "Nate" "created a" "resource"
updated profile - &#xf007 - #873cff "Nate" "updated a" "profile"
posted message - &#xf003 - #3caeff "Nate" "posted a" "message"
posted comment - &#xf27b - #2cb5e8 "Nate" "posted a" "comment"
new user - &#xf007 - #3cffae "Nate" "joined" "comuniDADOS!"
*/
