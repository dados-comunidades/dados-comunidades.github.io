import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserFeedComponent } from "./user-components/user-feed.component";

@Component({
  selector: 'app-da-users',
  templateUrl: './da-users.component.html',
  styleUrls: ['./da-users.component.css']
})
export class DaUsersComponent implements OnInit {

  private card:string;
  private showUserInfo: boolean = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  changeUserView(view:boolean){
      console.log(view);
      if (view){
          this.showUserInfo = false;
      } else {
          this.showUserInfo = true;
      }
  }
}
