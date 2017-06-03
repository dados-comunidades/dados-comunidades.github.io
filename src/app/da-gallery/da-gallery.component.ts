import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { Router, ActivatedRoute } from "@angular/router";
import { MapService } from "../shared/services/map.service";

@Component({
  selector: 'app-da-gallery',
  templateUrl: './da-gallery.component.html',
  styleUrls: ['./da-gallery.component.css'],
})
export class DaGalleryComponent {
    
    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
    }
}
