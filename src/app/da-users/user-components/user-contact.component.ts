import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['../da-users.component.css']
})
export class UserContactComponent implements OnInit {

    contactList = [
        {name: 'apollo', email:'brownie@home.net'},
        {name: 'lola', email:'furry@yahoo.com'},
        {name: 'fritz', email:'fast@gmail.com'},
        {name: 'pantha', email:'cat@aol.com'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
