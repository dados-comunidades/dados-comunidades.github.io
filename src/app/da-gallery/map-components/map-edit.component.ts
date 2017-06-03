import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {

    private subscription: Subscription;
    mapId: string;
    constructor(private route: ActivatedRoute, private router:Router) {

    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
          (params: any) => {
            // this.socialId = params['id'];
            this.mapId = params['id']
            // this.profile = this.userService.getCurrentUser();
          }
        );
    }
    onCancel(){
        this.router.navigate(['/gallery', this.mapId ]);
    }

}
