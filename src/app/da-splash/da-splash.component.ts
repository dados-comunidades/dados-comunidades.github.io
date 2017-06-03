import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './da-splash.component.html',
  styleUrls: ['./da-splash.component.css']
})
export class DaSplashComponent implements OnInit {


 @Output() authChosen = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {
  }
  test(){
      this.authChosen.emit(['yes']);
  }


}
