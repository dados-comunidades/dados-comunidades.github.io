import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

    appName: string = "comuniDADOS";
    public isCollapsed = true;

    constructor(){}

    navToggle() {
        this.isCollapsed == false ? this.isCollapsed = true : this.isCollapsed = false;
    }

    ngOnInit(){}

}
