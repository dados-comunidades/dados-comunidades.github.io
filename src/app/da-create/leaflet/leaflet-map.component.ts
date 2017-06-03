import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { LeafletDirective } from "./lib/leaflet.directive";
import { LeafletDrawDirective } from "./leaflet-draw/leaflet-draw.directive";
// import { PopUpEditComponent } from "../pop-up/pop-up-edit.component";
import { MapService } from "../../shared/services/map.service";
// import { MapLayer } from '../../shared/classes/map-layer';
// import { DDFeatureGroup } from '../../shared/classes/feature-group';
// import { DDFeatureLayer } from '../../shared/classes/feature-layer';
// import { DadosMap } from '../../shared/classes/dados-map';
import { Subscription } from "rxjs/Rx";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { PopUpSavemapComponent } from "../pop-up/pop-up-savemap.component";

import { GeocodingService } from "../../shared/services/geocoding.service";

// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { moveIn, fallIn, moveInLeft } from '../../shared/animations/routes';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class LeafletMapComponent {
        @ViewChild(LeafletDirective) lf:LeafletDirective;
        @ViewChild(LeafletDrawDirective) lfd:LeafletDrawDirective;
        // public name: any;
        // public state: string = '';
        // public address : Object;
        // private id: string;
        // public editingForm: boolean = false;
        // public currentlyRemoving: boolean = false;
        // public popUpDetails: any = {};
        // public mapIsNew: boolean;
        // private featureGroupDetails: DDFeatureGroup;
        i = 0;
        datavizChoices = ['Quality','Renter %', '% Absentee Landlord', 'Index1', 'Index2', 'Index3'];
        public dataVizChoice: string;
        private subscription: Subscription;

        constructor(
                    public mapService: MapService,
                    public geocodingService: GeocodingService,
                    private router: Router,
                    private activatedRoute: ActivatedRoute
                    // public af: AngularFire
                ){}

        swipeLeft(){
            if (this.i == 0){
                this.i = 5;
                this.dataVizChoice = this.datavizChoices[this.i];
            } else {
                this.i = this.i - 1;
                this.dataVizChoice = this.datavizChoices[this.i];
            }
        }
        swipeRight(){
            if (this.i == 5){
                this.i = 0;
                this.dataVizChoice = this.datavizChoices[this.i];
            } else {
                this.i = this.i + 1;
                this.dataVizChoice = this.datavizChoices[this.i];
            }
            this.lfd.changeHelio();
            console.log('swope');
        }
        ngOnInit(){
            console.log('init....')
            this.dataVizChoice = this.datavizChoices[this.i];
        }
                        //     this.af.auth.subscribe(auth => {
                        //         if (auth){
                        //             this.name = auth;
                        //         }
                        //     })
                        //     this.id = param['id'];
                        //     if (this.id){
                        //         this.mapService.fetchMapByID(this.id).subscribe(
                        //             (data:any) => {
                        //                 //when service is finished add current details to existing saveMapDetails.
                        //                 this.mapService.currentMap = data;
                        //                 this.mapService.currentMapKey = this.id;
                        //                 this.mapIsNew = false;
                        //                 //give current featureGroupDetails the existing map set and last position
                        //                 let shorthand = this.mapService.currentMap;
                        //                 this.featureGroupDetails = shorthand.mapfeatureGroups[shorthand.mapfeatureGroups.length-1];
                        //                 // console.log(this.mapService.currentMap);
                        //                 // console.log(this.featureGroupDetails);
                        //                 //in the map, for the array of mapfeatureGroups
                        //                 let mfg = shorthand.mapfeatureGroups;
                        //                 //loop through all featuregroups in map
                        //                 for (let a in mfg){
                        //                   // then loop through all shapes in each featuregroup
                        //                   let fgShapes = mfg[a].gpLayers
                        //                   for (var b in fgShapes){
                        //                     // then send each shape to the leaflet draw directive
                        //                     let singleShape = fgShapes[b];
                        //                     this.lfd.addLayersToMap(singleShape);
                        //                   }
                        //                 }
                        //             }
                        //         );
                        //     } else {
                        //         //load new Feature Group because this is a new map
                        //         //1. get empty feature group for collecting new layers
                        //         this.featureGroupDetails = this.mapService.createEmptyFGInstance();
                        //         //2. leaflet draw will create default feature Group
                        //         //3. when anything is drawn, we will save it to featureGroupDetails
                        //         //4. if map is saved, we will push entire object to firebase
                        //         //setup empty map details if this is a new map.
                        //         this.mapService.currentMap = this.mapService.createEmptyMapInstance();
                        //         this.mapIsNew = true;
                        //
                        //     }
                        // }
        //               );
        // }
        // logout(){
        //     this.af.auth.logout();
        //     console.log('logged out');
        //     this.router.navigateByUrl('login');
        // }
        // onSavedUpdate(){
        //     this.router.navigate(['gallery']);
        // }
        // getAddress(place:Object) {
        //      this.address = place['formatted_address'];
        //      let location = place['geometry']['location'];
        //      let lat = location.lat();
        //      let lng = location.lng();
        //     //  need to drop a pin on search result to help out user
        //
        //      this.lf.map.setView(L.latLng(lat, lng), 16);
        //     //  console.log("Address Object", place);
        // }
        //
        // onLayerPlaced(obj:any):void{
        //     //open the editing form on 'true'
        //     this.editingForm = obj.state;
        //     //send geometry to pop-up form
        //     this.popUpDetails = obj.geo;
        //     //attempting to pan the map on draw event, not working...
        //     let lat = obj.centroid.center.lat;
        //     let lng = obj.centroid.center.lng;
        //     let zm = obj.centroid.zoom;
        //     // this.lf.map.setView(L.latLng(lat, lng), zm);
        // }
        //
        // formChange(changeType:string):void{
        //     this.editingForm = false;
        //     if (changeType === 'complete'){
        //       console.log('form submission complete');
        //     } else { //cancel
        //       console.log('form submission canceled');
        //       this.lfd.removeTempLayer();
        //     }
        // }
        //
        // onSavedDetails(newDetails:DDFeatureLayer):void {
        //     console.log(newDetails);
        //     //push layer to featureGroup
        //     this.featureGroupDetails.gpLayers.push(newDetails);
        //     //add new layer with binded details
        //     this.lfd.confirmTempLayer(newDetails);
        //     //update map object
        //     //will have to change when we allow multiple feature groups
        //     this.mapService.currentMap.mapfeatureGroups.push(this.featureGroupDetails);
        // }

        getUserLocation(){
          // ask user if they want to share location and then pan to that location:
          this.geocodingService.getCurrentLocation()
              .subscribe(
                  location => {
                      this.lf.map.panTo([location.coords.latitude, location.coords.longitude]),
                      console.log("location is: ");
                      console.log(location);
                      this.lf.map.setZoom(18);
                  },
                  err => console.error(err)
              );
        }

        ngOnDestroy(){
            //this funtion is used to prevent memory leaks
            this.subscription.unsubscribe;
        }
        //
        // ngAfterViewInit(){
        //     //remove animation (whenever i make it)
        // }

        // drawOptions = {
        //     position: 'topright',
        //     draw: {
        //     	marker: {
        //     		icon: L.icon({
        //                 iconUrl: require<any>("../../../../node_modules/leaflet/dist/images/marker-icon.png"),
        //                 shadowUrl: require<any>("../../../../node_modules/leaflet/dist/images/marker-shadow.png")
        //     		})
        //     	},
        //         polyline: {
        //             shapeOptions: {
        //               color: '#31b0d5'
        //             }
        //         },
        //         polygon: {
        //             allowIntersection: false, // Restricts shapes to simple polygons
        //             drawError: {
        //                 color: '#e1e100', // Color the shape will turn when intersects
        //                 message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
        //             },
        //             shapeOptions: {
        //                 color: '#188955',
        //                 fillColor: '#188955'
        //             }
        //         },
        //         rectangle: {
        //             shapeOptions: {
        //                 color: '#c9302c',
        //                 fillColor: '#c9302c'
        //             }
        //         },
        //         circle: {
        //             shapeOptions: {
        //                 color: '#ec971f',
        //                 fillColor: '#ec971f'
        //             }
        //         }
        //     }
        // };

}
