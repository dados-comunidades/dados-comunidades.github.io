import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivityService } from "../../shared/services/activity.service";

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

    feed = [];

    constructor(private activity:ActivityService) {
        activity.fetchActivity().subscribe(
            (data:any) =>
            {
                for(let obj in data){
                    this.feed.push(data[obj]);
                }
            }
        );
    }

    ngOnInit() {
        // console.log(this.feed);
    }

}
