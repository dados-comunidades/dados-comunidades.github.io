import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { Router, ActivatedRoute } from "@angular/router";
import { MapService } from "../../shared/services/map.service";

@Component({
  selector: 'app-map-all',
  templateUrl: './map-all.component.html',
  styleUrls: ['../da-gallery.component.css']
})
export class MapAllComponent implements OnInit {

      listView = 'block';
      gridView = 'none';

      fireGallery = [];

      constructor(private router: Router,
                  private activatedRoute: ActivatedRoute,
                  public mapService: MapService) { }

      ngOnInit() {
          //load layers on map initilization:
          this.mapService.fetchAllMaps()
            .subscribe(
              (data: any) => {
                for (let key in data) {
                    data[key].mapKey = key;
                    this.fireGallery.push(data[key]);
                }
                console.log(this.fireGallery);
              });
      }

      viewMap(i) {
        this.mapService.currentMap = this.fireGallery[i];
        let key = this.fireGallery[i].mapKey;
        this.router.navigate(['../create', key]);
      }

      viewMapDetails(i) {
        this.mapService.currentMap = this.fireGallery[i];
        let key = this.fireGallery[i].mapKey;
        this.router.navigate(['/gallery', key]);
      }

      changeView(viewType:string){
        if (viewType == "grid"){
          this.listView = 'none';
          this.gridView = 'block';
        } else {
          this.gridView = 'none';
          this.listView = 'block';
        }
      }

}
