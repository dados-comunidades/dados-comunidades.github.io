import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { DadosMap } from "../../shared/classes/dados-map";
import { MapService } from "../../shared/services/map.service";

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {

    private subscription: Subscription;
    currentMap: DadosMap;
    mapKey: any;
    editable: true;
    constructor(private route: ActivatedRoute, private router:Router, private mapService:MapService) {

    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
          (params: any) => {
            this.mapKey = params['id'];
            this.currentMap = this.mapService.currentMap;
          }
        );
    }
    onCancel(){
        this.router.navigate(['/gallery']);
    }

    viewMap() {
        console.log(this.mapKey);
        this.router.navigate(['/create', this.mapKey]);
    }

    editMapDetails() {
        this.router.navigate(['/gallery', this.mapKey, 'edit']);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
