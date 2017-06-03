webpackJsonp([1,4],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletDirectiveWrapper; });
var LeafletDirectiveWrapper = (function () {
    function LeafletDirectiveWrapper(leafletDirective) {
        this.leafletDirective = leafletDirective;
    }
    LeafletDirectiveWrapper.prototype.init = function () {
        // Nothing for now
    };
    LeafletDirectiveWrapper.prototype.getMap = function () {
        return this.leafletDirective.getMap();
    };
    return LeafletDirectiveWrapper;
}());

//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet.directive.wrapper.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MapLayer } from '../classes/map-layer';
// import { GalleryMap } from '../classes/gallery-map';
// import { DadosMap } from '../classes/dados-map';
// import { DDFeatureGroup } from '../classes/feature-group';
// import { DDFeatureLayer } from '../classes/feature-layer';
// import { IMapLayer } from '../interfaces/map-layer.interface';
// import { IGalleryMap } from '../interfaces/gallery-map.interface';



// import { ActivityService } from "./activity.service";
// import { AuthService } from "./auth.service";
var MapService = (function () {
    function MapService(http
        // private activity:ActivityService, private auth: AuthService
    ) {
        this.http = http;
    }
    // createEmptyMapInstance():DadosMap {
    //     let newMap = {
    //         mapTitle: '',
    //         mapDesc: '',
    //         mapTags: [],
    //         mapAuthor: '',
    //         mapAuthorId: '',
    //         mapVotes: 0,
    //         mapViews: 0,
    //         mapImg: '',
    //         dateCreated: new Date(),
    //         dateModified: new Date(),
    //         mapfeatureGroups: []
    //     }
    //     return newMap;
    // }
    // createEmptyLayerInstance():DDFeatureLayer {
    //     let newLayer = {
    //         lyrName: '',
    //         lyrDesc: '',
    //         lyrRating: 0,
    //         lyrType: '',
    //         lyrJson: {},
    //         lyrDateCreated: new Date(),
    //         lyrDateModified: new Date(),
    //     }
    //     return newLayer;
    // }
    // createEmptyFGInstance():DDFeatureGroup {
    //     let newFG = {
    //         gpName: '',
    //         gpDesc: '',
    //         gpAuthor: '',
    //         gpRating: 0,
    //         gpViews: 0,
    //         gpDateCreated: new Date(),
    //         gpDateModified: new Date(),
    //         gpLayers: []
    //     }
    //     return newFG;
    // }
    //
    // postMapToDB( Map: DadosMap ){
    //     console.log('posting map to db...');
    //     const body = JSON.stringify(Map);
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     ///http.put is a better method because it OVERWRITES, can be used as an editMethod()
    //     this.activity.postActivity('new map created').subscribe((data:any)=>{ console.log('activity logged...')});
    //     return this.http.post('https://intense-torch-2531.firebaseio.com/maps.json', body, {
    //         headers: headers
    //     })
    //     .map( ( data: Response) => data.json())
    //     .catch(this.handleError);
    //     //create activity
    // }
    // updateMapToDB( Map: DadosMap ){
    //     this.currentMap = Map;
    //     console.log('updating map in db...');
    //     const body = JSON.stringify(Map);
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     ///http.put is a better method because it OVERWRITES, can be used as an editMethod()
    //     this.activity.postActivity('map updated').subscribe((data:any)=>{ console.log('activity logged...')});
    //     return this.http.put('https://intense-torch-2531.firebaseio.com/maps/'+this.currentMapKey+'.json', body, {
    //       headers: headers
    //     })
    //         .map( ( data: Response) => data.json())
    //         .catch(this.handleError);
    // }
    //
    // fetchMapByID(mapKey: string) {
    //     console.log('fetching map....'+ mapKey)
    //     return this.http.get('https://intense-torch-2531.firebaseio.com/maps/'+mapKey+'.json')
    //       .map( (response: Response) => response.json() )
    //       .catch(this.handleError);
    // }
    // fetchAllMaps(){
    //     return this.http.get('https://intense-torch-2531.firebaseio.com/maps.json')
    //       .map( (response: Response) => response.json() )
    //       .catch(this.handleError);
    // }
    //
    // //post method is used to ADD and UPDATE
    // postLayerToDB( Layer: MapLayer ){
    //     console.log('posting layer to db...');
    //     const body = JSON.stringify(Layer);
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     ///http.put is a better method because it OVERWRITES, can be used as an editMethod()
    //     return this.http.post('https://intense-torch-2531.firebaseio.com/layers.json', body, {
    //       headers: headers
    //     })
    //       .map( ( data: Response) => data.json())
    //       .catch(this.handleError);
    // }
    //
    // fetchLayerByID(LayerKey: string){
    //     return this.http.get('https://intense-torch-2531.firebaseio.com/layers.json/'+LayerKey+'.json')
    //       .map( (response: Response) => response.json() )
    //       .catch(this.handleError);
    // }
    //
    // fetchAllLayers(){
    //     return this.http.get('https://intense-torch-2531.firebaseio.com/layers.json')
    //       .map( (response: Response) => response.json() )
    //       .catch(this.handleError);
    // }
    MapService.prototype.addHelio = function () {
        return this.http.get('https://dados-comunidades.github.io/dist/assets/heliopolis_w_att.geojson')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MapService.prototype.handleError = function (err) {
        console.log(err);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
    };
    return MapService;
}());
MapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MapService);

var _a;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/map.service.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_leaflet_directive__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_leaflet_directive_wrapper__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_map_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletDrawDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { MapLayer } from "../../../shared/classes/map-layer";
// import { DDFeatureLayer } from "../../../shared/classes/feature-layer";

var LeafletDrawDirective = (function () {
    // @Output() layerPlaced = new EventEmitter<any>();
    function LeafletDrawDirective(leafletDirective, mapService) {
        this.mapService = mapService;
        // @Input('leafletDrawOptions')
        this.drawOptions = null;
        this.leafletDirective = new __WEBPACK_IMPORTED_MODULE_2__lib_leaflet_directive_wrapper__["a" /* LeafletDirectiveWrapper */](leafletDirective);
    }
    LeafletDrawDirective.prototype.ngOnInit = function () {
        this.addHelio();
        this.leafletDirective.init();
        // Initialize the draw options (in case they weren't provided)
        this.drawOptions = this.initializeDrawOptions(this.drawOptions);
        // Create the control
        // this.drawControl =  new L.Control.Draw(this.drawOptions);
        // Pull out the feature group for convenience
        this.featureGroup = this.drawOptions.edit.featureGroup;
        // Add the control to the map
        // this.leafletDirective.getMap().addControl(this.drawControl);
        // this.leafletDirective.getMap().on(L.Draw.Event.DRAWSTART, (e: any) => {
        // 	let shape = e.layerType;
        // 	let center = e.target.options.center;
        // 	let zoom = e.target.options.zoom;
        // 	//center map
        // 	if (shape == 'circle' || shape == 'marker'){
        // 		console.log("DRAWSTART");
        // 			// this.leafletDirective.getMap()setView(L.latLng(center.lat, center.lng), zoom);
        // 	} else {
        // 			// this.leafletDirective.setView(L.latLng(center.lat, center.lng), zoom);
        // 	}
        // });
        // Register the main handler for events coming from the draw plugin
        // this.leafletDirective.getMap().on(L.Draw.Event.CREATED, (e: any) => {
        // 	let shape = e.layerType;
        // 	let center = e.target.options.center;
        // 	let zoom = e.target.options.zoom;
        // 	let layer = (e as L.DrawEvents.Created).layer;
        //
        // 	//create empty Map Object of type MapLayer
        // 	let lyrObject: DDFeatureLayer = this.mapService.createEmptyLayerInstance();
        // 	//create templayer because toGeoJSON doesn't exist on "layer"
        // 	this.tempLayer = layer;
        // 	//create geojson geometry
        // 	this.geoJson = this.tempLayer.toGeoJSON();
        // 	this.geoJson['properties']['description'] = '';
        // 	//add a temp object to leaflet map
        // 	//we want the option to delete it later if the form is canceled
        // 	this.leafletDirective.getMap().addLayer(this.tempLayer);
        //
        // 	//populate geojson
        // 	for (let key in layer['options']){
        // 		this.geoJson['properties'][key] = layer['options'][key]
        // 	}
        // 	//prep the object we want to send out of the component
        // 		lyrObject.lyrJson = this.geoJson;
        // 		lyrObject.lyrType = shape;
        //
        // 	//emit the state of editing (opens pop-up), the centroid of the shape, and the object data
        // 	this.layerPlaced.emit({
        // 			state:true,
        // 			centroid: { center, zoom },
        // 			geo: lyrObject
        // 	});
        //
        // });
    };
    //
    // confirmTempLayer(officialDetails:DDFeatureLayer):void{
    // 	//get current popupcontent
    // 	let popup = officialDetails.lyrJson['properties']['popupContent'];
    // 	//add the unique id to the top of our popupcontent
    // 	this.tempLayer.bindPopup(popup);
    // 	//add editable layer to feature group
    // 	this.featureGroup.addLayer(this.tempLayer);
    // 	console.log('confirmed');
    // }
    // removeTempLayer():void{
    // 	this.leafletDirective.getMap().removeLayer(this.tempLayer)
    // }
    LeafletDrawDirective.prototype.changeHelio = function () {
        var _this = this;
        //remove layer
        this.leafletDirective.getMap().removeLayer(this.featureGroup);
        console.log(this.featureGroup);
        setTimeout(function () {
            _this.leafletDirective.getMap().addLayer(_this.featureGroup);
        }, 5000);
        //add new layer based on selection
        // this.addHelio();
    };
    LeafletDrawDirective.prototype.addHelio = function () {
        var _this = this;
        this.mapService.addHelio().subscribe(function (data) {
            function normalize(val) {
                var delta = 4.14 - 1.5;
                return ((val - 1.5) / delta);
            }
            function getIndexScore(d) {
                if (d['RentPerc']) {
                    var quality = 1 - normalize(d['Quality']);
                    var rentPerc = d['RentPerc'];
                    var absentee = d['RentPercAbs'];
                    var index = quality + rentPerc + absentee;
                    return index;
                }
                else {
                    // console.log("nullss");
                    return "N/A";
                }
            }
            function getBlockColor(d) {
                if (d['RentPerc']) {
                    var quality = 1 - normalize(d['Quality']);
                    var rentPerc = d['RentPerc'];
                    var absentee = d['RentPercAbs'];
                    var index = quality + rentPerc + absentee;
                    return index > 2.5 ? '#081E59' :
                        index > 2.0 ? '#225EA8' :
                            index > 1.5 ? '#41B7C4' :
                                index > 1.0 ? '#C6E8B3' :
                                    '#ffffd9';
                }
                else {
                    // console.log("nullss");
                    return "#777777";
                }
            }
            for (var obj in data.features) {
                // console.log( data.features[obj] );
                __WEBPACK_IMPORTED_MODULE_4_leaflet__["geoJSON"](data.features[obj], {
                    style: function (feature) {
                        return ({
                            color: "#111111",
                            fillColor: getBlockColor(feature.properties),
                            weight: 0.5,
                            opacity: 0.5,
                            fillOpacity: 0.5
                        });
                    },
                    onEachFeature: function (feature, layer) {
                        layer.bindPopup("\n\t\t\t\t\t\t\t<p><b>Block:</b> " + feature.properties['LABEL'] + "<br>\n\t\t\t\t\t\t\t<p><b>Percent Renter:</b> " + feature.properties['RentPerc'] + "<br>\n\t\t\t\t\t\t\t<p><b>Quality:</b> " + feature.properties['Quality'] + "<br>\n\t\t\t\t\t\t\t<p><b>% Absentee:</b> " + feature.properties['RentPercAbs'] + "<br>\n\t\t\t\t\t\t\t<p><b>Index Score:</b> " + getIndexScore(feature.properties) + "<br>\n\n\t\t\t\t\t\t");
                        if (feature.properties) {
                            _this.drawOptions.edit.featureGroup.addLayer(layer);
                        }
                    }
                });
            }
            //end subscribe
        });
    };
    /* section for adding features to map on init */
    // addLayersToMap(obj):void {
    // 	console.log('adding... objects');
    // 	console.log(obj);
    // 	let myIcon = L.icon({
    // 		iconUrl: "../../../assets/grey-icon.png",
    // 		shadowUrl: "../../../../node_modules/leaflet/dist/images/marker-shadow.png"
    // 	});
    // 	let shape = obj.lyrType;
    // 	function customStyle () {
    //         return {
    // 			color: "#111111",
    // 			fillColor: "#111111",
    // 			opacity: 0.5
    //         };
    // 	};
    // 	if (shape == 'marker') {
    // 		L.geoJSON(obj.lyrJson, {
    // 			pointToLayer: function (feature, latlng) {
    // 				return L.marker(latlng, {
    // 					icon: myIcon
    // 				});
    // 			},
    // 			onEachFeature: (feature, layer) => {
    // 			    if (feature.properties) {
    // 					// console.log(layer);
    // 					this.drawOptions.edit.featureGroup.addLayer(layer);
    // 			    }
    // 			}
    // 		});
    // 	} else if (shape == 'circle') {
    // 		L.geoJSON(obj.lyrJson, {
    // 			pointToLayer: function (feature, latlng) {
    // 				return L.circle(latlng, {
    // 					radius: obj.lyrJson['properties'].radius,
    // 					color: "#111111",
    // 					fillColor: "#111111",
    // 					opacity: 0.5
    // 				});
    // 			},
    // 			onEachFeature: (feature, layer) => {
    // 			    if (feature.properties) {
    // 					// console.log(layer);
    // 					this.drawOptions.edit.featureGroup.addLayer(layer);
    // 			    }
    // 			}
    // 		});
    // 	} else {
    // 		L.geoJSON(obj.lyrJson, {
    // 			style: customStyle,
    // 			onEachFeature: (feature, layer) => {
    // 			    if (feature.properties) {
    // 					this.drawOptions.edit.featureGroup.addLayer(layer);
    // 			    }
    // 			}
    // 		});
    // 	}
    //
    // }
    //
    //
    // ngOnChanges(changes: { [key: string]: SimpleChange }) {
    // 	// No changes being handled currently
    //
    // }
    LeafletDrawDirective.prototype.initializeDrawOptions = function (options) {
        // Ensure the options have a featureGroup
        if (null == options) {
            options = {
                edit: null
            };
        }
        if (null == options.edit) {
            options.edit = {
                featureGroup: null
            };
        }
        if (null == options.edit.featureGroup) {
            // No feature group was provided, so we're going to add it ourselves
            options.edit.featureGroup = __WEBPACK_IMPORTED_MODULE_4_leaflet__["featureGroup"]();
            this.leafletDirective.getMap().addLayer(options.edit.featureGroup);
        }
        return options;
    };
    return LeafletDrawDirective;
}());
LeafletDrawDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Directive */])({
        selector: '[leafletDraw]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lib_leaflet_directive__["a" /* LeafletDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib_leaflet_directive__["a" /* LeafletDirective */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_map_service__["a" /* MapService */]) === "function" && _b || Object])
], LeafletDrawDirective);

var _a, _b;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-draw.directive.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_leaflet_directive__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaflet_draw_leaflet_draw_directive__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_map_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_geocoding_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_animations_routes__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { PopUpEditComponent } from "../pop-up/pop-up-edit.component";

// import { PopUpSavemapComponent } from "../pop-up/pop-up-savemap.component";

// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


var LeafletMapComponent = (function () {
    function LeafletMapComponent(mapService, geocodingService, router, activatedRoute
        // public af: AngularFire
    ) {
        this.mapService = mapService;
        this.geocodingService = geocodingService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // public name: any;
        // public state: string = '';
        // public address : Object;
        // private id: string;
        // public editingForm: boolean = false;
        // public currentlyRemoving: boolean = false;
        // public popUpDetails: any = {};
        // public mapIsNew: boolean;
        // private featureGroupDetails: DDFeatureGroup;
        this.i = 0;
        this.datavizChoices = ['Quality', 'Renter %', '% Absentee Landlord', 'Index1', 'Index2', 'Index3'];
    }
    LeafletMapComponent.prototype.swipeLeft = function () {
        if (this.i == 0) {
            this.i = 5;
            this.dataVizChoice = this.datavizChoices[this.i];
        }
        else {
            this.i = this.i - 1;
            this.dataVizChoice = this.datavizChoices[this.i];
        }
    };
    LeafletMapComponent.prototype.swipeRight = function () {
        if (this.i == 5) {
            this.i = 0;
            this.dataVizChoice = this.datavizChoices[this.i];
        }
        else {
            this.i = this.i + 1;
            this.dataVizChoice = this.datavizChoices[this.i];
        }
        this.lfd.changeHelio();
        console.log('swope');
    };
    LeafletMapComponent.prototype.ngOnInit = function () {
        console.log('init....');
        this.dataVizChoice = this.datavizChoices[this.i];
    };
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
    LeafletMapComponent.prototype.getUserLocation = function () {
        var _this = this;
        // ask user if they want to share location and then pan to that location:
        this.geocodingService.getCurrentLocation()
            .subscribe(function (location) {
            _this.lf.map.panTo([location.coords.latitude, location.coords.longitude]),
                console.log("location is: ");
            console.log(location);
            _this.lf.map.setZoom(18);
        }, function (err) { return console.error(err); });
    };
    LeafletMapComponent.prototype.ngOnDestroy = function () {
        //this funtion is used to prevent memory leaks
        this.subscription.unsubscribe;
    };
    return LeafletMapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__lib_leaflet_directive__["a" /* LeafletDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lib_leaflet_directive__["a" /* LeafletDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib_leaflet_directive__["a" /* LeafletDirective */]) === "function" && _a || Object)
], LeafletMapComponent.prototype, "lf", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__leaflet_draw_leaflet_draw_directive__["a" /* LeafletDrawDirective */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__leaflet_draw_leaflet_draw_directive__["a" /* LeafletDrawDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__leaflet_draw_leaflet_draw_directive__["a" /* LeafletDrawDirective */]) === "function" && _b || Object)
], LeafletMapComponent.prototype, "lfd", void 0);
LeafletMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-leaflet-map',
        template: __webpack_require__(678),
        styles: [__webpack_require__(669)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__shared_animations_routes__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__shared_animations_routes__["b" /* fallIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__shared_animations_routes__["c" /* moveInLeft */])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_map_service__["a" /* MapService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_geocoding_service__["a" /* GeocodingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_geocoding_service__["a" /* GeocodingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], LeafletMapComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-map.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leaflet_util__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaflet_layers_object_diff_model__ = __webpack_require__(604);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletControlLayersWrapper; });



var LeafletControlLayersWrapper = (function () {
    function LeafletControlLayersWrapper() {
    }
    LeafletControlLayersWrapper.prototype.getLayersControl = function () {
        return this.layersControl;
    };
    LeafletControlLayersWrapper.prototype.init = function (controlConfig, controlOptions) {
        var baseLayers = controlConfig.baseLayers || {};
        var overlays = controlConfig.overlays || {};
        this.layersControl = __WEBPACK_IMPORTED_MODULE_0_leaflet__["control"].layers(baseLayers, overlays, controlOptions);
        return this.layersControl;
    };
    LeafletControlLayersWrapper.prototype.setLayersControlConfig = function (newConfig, prevConfig) {
        if (null == this.layersControl) {
            return new __WEBPACK_IMPORTED_MODULE_2__leaflet_layers_object_diff_model__["a" /* LeafletLayersObjectDiff */]({}, {});
        }
        var toRemove;
        var baseLayers;
        var overlays;
        // Figure out which layers need to be removed (prev - new)
        toRemove = __WEBPACK_IMPORTED_MODULE_1__leaflet_util__["a" /* LeafletUtil */].mergeMaps(__WEBPACK_IMPORTED_MODULE_1__leaflet_util__["a" /* LeafletUtil */].mapSubtract(prevConfig.baseLayers, newConfig.baseLayers), __WEBPACK_IMPORTED_MODULE_1__leaflet_util__["a" /* LeafletUtil */].mapSubtract(prevConfig.overlays, newConfig.overlays));
        // Figure out which layers need to be added (new - prev)
        baseLayers = __WEBPACK_IMPORTED_MODULE_1__leaflet_util__["a" /* LeafletUtil */].mapSubtract(newConfig.baseLayers, prevConfig.baseLayers);
        overlays = __WEBPACK_IMPORTED_MODULE_1__leaflet_util__["a" /* LeafletUtil */].mapSubtract(newConfig.overlays, prevConfig.overlays);
        // Do the actual removal and addition
        for (var k in toRemove) {
            if (toRemove.hasOwnProperty(k)) {
                var l = toRemove[k];
                this.layersControl.removeLayer(l);
            }
        }
        for (var k in baseLayers) {
            if (baseLayers.hasOwnProperty(k)) {
                var l = baseLayers[k];
                this.layersControl.addBaseLayer(l, k);
            }
        }
        for (var k in overlays) {
            if (overlays.hasOwnProperty(k)) {
                var l = overlays[k];
                this.layersControl.addOverlay(l, k);
            }
        }
        return new __WEBPACK_IMPORTED_MODULE_2__leaflet_layers_object_diff_model__["a" /* LeafletLayersObjectDiff */](toRemove, __WEBPACK_IMPORTED_MODULE_1__leaflet_util__["a" /* LeafletUtil */].mergeMaps(baseLayers, overlays));
    };
    return LeafletControlLayersWrapper;
}());

//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-control-layers.wrapper.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leaflet_directive__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layers_leaflet_layers_directive__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layers_control_leaflet_control_layers_directive__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layers_base_leaflet_baselayers_directive__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_geocoding_service__ = __webpack_require__(419);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LeafletModule = LeafletModule_1 = (function () {
    function LeafletModule() {
    }
    LeafletModule.forRoot = function () {
        return { ngModule: LeafletModule_1, providers: [] };
    };
    return LeafletModule;
}());
LeafletModule = LeafletModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__leaflet_directive__["a" /* LeafletDirective */],
            __WEBPACK_IMPORTED_MODULE_2__layers_leaflet_layers_directive__["a" /* LeafletLayersDirective */],
            __WEBPACK_IMPORTED_MODULE_3__layers_control_leaflet_control_layers_directive__["a" /* LeafletLayersControlDirective */],
            __WEBPACK_IMPORTED_MODULE_4__layers_base_leaflet_baselayers_directive__["a" /* LeafletBaseLayersDirective */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__leaflet_directive__["a" /* LeafletDirective */],
            __WEBPACK_IMPORTED_MODULE_2__layers_leaflet_layers_directive__["a" /* LeafletLayersDirective */],
            __WEBPACK_IMPORTED_MODULE_3__layers_control_leaflet_control_layers_directive__["a" /* LeafletLayersControlDirective */],
            __WEBPACK_IMPORTED_MODULE_4__layers_base_leaflet_baselayers_directive__["a" /* LeafletBaseLayersDirective */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__shared_services_geocoding_service__["a" /* GeocodingService */]
        ]
    })
], LeafletModule);

var LeafletModule_1;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletUtil; });
var LeafletUtil = (function () {
    function LeafletUtil() {
    }
    /**
     * Combine two associative arrays in a shallow manner. Where there are duplicate properties,
     * the value in the second object will overwrite the value of the first object
     *
     * @param aMap The first object
     * @param bMap The second object
     * @returns {{}} The aggregate of both objects
     */
    LeafletUtil.mergeMaps = function (aMap, bMap) {
        var toReturn = {};
        if (null != aMap) {
            for (var k in aMap) {
                if (aMap.hasOwnProperty(k)) {
                    toReturn[k] = aMap[k];
                }
            }
        }
        if (null != bMap) {
            for (var k in bMap) {
                if (bMap.hasOwnProperty(k)) {
                    toReturn[k] = bMap[k];
                }
            }
        }
        return toReturn;
    };
    /**
     * Subtracts the properties of an associative array in a shallow manner.
     * Where there are duplicate properties, the properties will be removed
     * from the first object.
     *
     * @param aMap The object from which to subtract properties
     * @param bMap The object containing properties to subtract
     * @returns {{}}
     */
    LeafletUtil.mapSubtract = function (aMap, bMap) {
        var toReturn = {};
        if (null != aMap) {
            // Copy all of aMap into toReturn
            for (var k in aMap) {
                if (aMap.hasOwnProperty(k)) {
                    toReturn[k] = aMap[k];
                }
            }
            // If there's a bMap, delete all bMap keys from aMap
            if (null != bMap) {
                for (var k in bMap) {
                    if (bMap.hasOwnProperty(k)) {
                        delete toReturn[k];
                    }
                }
            }
        }
        return toReturn;
    };
    LeafletUtil.mapToArray = function (map) {
        var toReturn = [];
        for (var k in map) {
            if (map.hasOwnProperty(k)) {
                toReturn.push(map[k]);
            }
        }
        return toReturn;
    };
    return LeafletUtil;
}());

//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet.util.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GeocodingService = (function () {
    function GeocodingService(http) {
        this.http = http;
    }
    GeocodingService.prototype.geocode = function (address) {
        return this.http
            .get("http://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(address))
            .map(function (res) { return res.json(); })
            .map(function (result) {
            if (result.status !== "OK") {
                throw new Error("unable to geocode address");
            }
            var location = {};
            location.address = result.results[0].formatted_address;
            location.latitude = result.results[0].geometry.location.lat;
            location.longitude = result.results[0].geometry.location.lng;
            var viewPort = result.results[0].geometry.viewport;
            location.viewBounds = L.latLngBounds({
                lat: viewPort.southwest.lat,
                lng: viewPort.southwest.lng
            }, {
                lat: viewPort.northeast.lat,
                lng: viewPort.northeast.lng
            });
            return location;
        });
    };
    GeocodingService.prototype.getCurrentLocation = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer) {
            // console.log(window.navigator);
            // console.log(window.navigator.geolocation);
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(function (position) {
                    observer.next(position);
                    observer.complete();
                });
            }
        });
    };
    return GeocodingService;
}());
GeocodingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GeocodingService);

var _a;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/geocoding.service.js.map

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 464;


/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(611);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/main.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthService } from "./shared/services/auth.service";
var AppComponent = (function () {
    function AppComponent(routes
        // private auth: AuthService
    ) {
        this.routes = routes;
        this.start = false;
        this.isLoggedIn = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(677),
        styles: [__webpack_require__(668)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/app.component.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_vectorgrid__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_vectorgrid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet_vectorgrid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_draw__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_draw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet_draw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asymmetrik_angular2_leaflet__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_main_routes__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_nav_nav_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__da_create_leaflet_leaflet_mapping_module__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__(595);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/// <reference path="../typings/require.d.ts"/>
/// <reference path="../typings/leaflet.vectorgrid.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular2 Third-Party






// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";


// import { AuthService } from "./shared/services/auth.service";
// import { UserService } from "./shared/services/user.service";
// import { ActivityService } from "./shared/services/activity.service";


//
// import { DaGalleryComponent } from "./da-gallery/da-gallery.component";
// import { DaUsersComponent } from "./da-users/da-users.component";
// import { UserContactComponent } from "./da-users/user-components/user-contact.component";
// import { UserWorkComponent } from "./da-users/user-components/user-work.component";
// import { UserAboutComponent } from "./da-users/user-components/user-about.component";
// import { UserEditComponent } from "./da-users/user-components/user-edit.component";
// import { UserFeedComponent } from "./da-users/user-components/user-feed.component";
//
//
// import { MapDetailComponent } from "./da-gallery/map-components/map-detail.component";
// import { MapEditComponent } from "./da-gallery/map-components/map-edit.component";
// import { MapAllComponent } from "./da-gallery/map-components/map-all.component";
//
//
// import { DaLoginComponent } from "./da-login/da-login.component";
// import { FileNamePipe } from "./shared/filterName.pipe";

/* third party fun */

// import { AngularFireModule, AuthMethods } from 'angularfire2';
//
// export const firebaseConfig = {
//   apiKey: "AIzaSyB55S_7WFCu19drRo_4bNq-YzZdRbGM6bk",
//   authDomain: "intense-torch-2531.firebaseapp.com",
//   databaseURL: "https://intense-torch-2531.firebaseio.com",
//   projectId: "intense-torch-2531",
//   storageBucket: "intense-torch-2531.appspot.com",
//   // messagingSenderId: "316955783479"
// };
// const firebaseAuthConfig = {
//   method: AuthMethods.Popup,
//   remember: 'default'
// };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shared_nav_nav_component__["a" /* NavComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            //   FormsModule,
            //   ReactiveFormsModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            //   AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
            __WEBPACK_IMPORTED_MODULE_10__da_create_leaflet_leaflet_mapping_module__["a" /* LeafletMappingModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_main_routes__["a" /* main_routes */]
        ],
        // providers: [ AuthService, UserService, ActivityService ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/app.module.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_leaflet_module__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaflet_draw_directive__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_map_service__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletDrawModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LeafletDrawModule = LeafletDrawModule_1 = (function () {
    function LeafletDrawModule() {
    }
    LeafletDrawModule.forRoot = function () {
        return { ngModule: LeafletDrawModule_1, providers: [] };
    };
    return LeafletDrawModule;
}());
LeafletDrawModule = LeafletDrawModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__lib_leaflet_module__["a" /* LeafletModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__leaflet_draw_directive__["a" /* LeafletDrawDirective */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__leaflet_draw_directive__["a" /* LeafletDrawDirective */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__shared_services_map_service__["a" /* MapService */]
        ]
    })
], LeafletDrawModule);

var LeafletDrawModule_1;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-draw.module.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_leaflet_module__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leaflet_draw_leaflet_draw_module__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leaflet_map_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_map_service__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletMappingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";




// import { PopUpEditComponent } from "../pop-up/pop-up-edit.component";

// import { PopUpSavemapComponent } from "../pop-up/pop-up-savemap.component";
var LeafletMappingModule = (function () {
    function LeafletMappingModule() {
    }
    return LeafletMappingModule;
}());
LeafletMappingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__leaflet_map_component__["a" /* LeafletMapComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            // CommonModule,
            // FormsModule,
            // ReactiveFormsModule,
            __WEBPACK_IMPORTED_MODULE_2__lib_leaflet_module__["a" /* LeafletModule */],
            __WEBPACK_IMPORTED_MODULE_3__leaflet_draw_leaflet_draw_module__["a" /* LeafletDrawModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__shared_services_map_service__["a" /* MapService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__leaflet_map_component__["a" /* LeafletMapComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__leaflet_map_component__["a" /* LeafletMapComponent */]],
    })
], LeafletMappingModule);

//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-mapping.module.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaflet_util__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leaflet_directive__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leaflet_directive_wrapper__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__control_leaflet_control_layers_wrapper__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__control_leaflet_control_layers_config_model__ = __webpack_require__(602);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletBaseLayersDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeafletBaseLayersDirective = (function () {
    function LeafletBaseLayersDirective(leafletDirective) {
        this.leafletDirective = new __WEBPACK_IMPORTED_MODULE_4__leaflet_directive_wrapper__["a" /* LeafletDirectiveWrapper */](leafletDirective);
        this.controlLayers = new __WEBPACK_IMPORTED_MODULE_5__control_leaflet_control_layers_wrapper__["a" /* LeafletControlLayersWrapper */]();
    }
    LeafletBaseLayersDirective.prototype.ngOnInit = function () {
        // Init the map
        this.leafletDirective.init();
        // Initially configure the controlLayers
        this.controlLayers
            .init({ baseLayers: this.baseLayers }, this.layersControlOptions)
            .addTo(this.leafletDirective.getMap());
        // Sync the baselayer (will default to the first layer in the map)
        this.syncBaseLayer();
    };
    LeafletBaseLayersDirective.prototype.ngOnChanges = function (changes) {
        // Set the new baseLayers
        if (changes['baseLayers']) {
            this.setBaseLayers(changes['baseLayers'].currentValue, changes['baseLayers'].previousValue);
        }
    };
    LeafletBaseLayersDirective.prototype.setBaseLayers = function (newBaseLayers, prevBaseLayers) {
        // Update the layers control
        this.controlLayers.setLayersControlConfig(new __WEBPACK_IMPORTED_MODULE_6__control_leaflet_control_layers_config_model__["a" /* LeafletControlLayersConfig */](newBaseLayers), new __WEBPACK_IMPORTED_MODULE_6__control_leaflet_control_layers_config_model__["a" /* LeafletControlLayersConfig */](prevBaseLayers));
        // Sync the new baseLayer
        this.syncBaseLayer();
    };
    /**
     * Check the current base layer and change it to the new one if necessary
     */
    LeafletBaseLayersDirective.prototype.syncBaseLayer = function () {
        var map = this.leafletDirective.getMap();
        var layers = __WEBPACK_IMPORTED_MODULE_2__leaflet_util__["a" /* LeafletUtil */].mapToArray(this.baseLayers);
        var foundLayer;
        // Search all the layers in the map to see if we can find them in the baselayer array
        map.eachLayer(function (l) {
            foundLayer = layers.find(function (bl) { return l === bl; });
        });
        // Did we find the layer?
        if (null != foundLayer) {
            // Yes - set the baselayer to the one we found
            this.baseLayer = foundLayer;
        }
        else {
            // No - set the baselayer to the first in the array and add it to the map
            if (layers.length > 0) {
                this.baseLayer = layers[0];
                this.baseLayer.addTo(map);
            }
        }
    };
    return LeafletBaseLayersDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletBaseLayers'),
    __metadata("design:type", typeof (_a = ((_b = (typeof __WEBPACK_IMPORTED_MODULE_1_leaflet__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_leaflet__).Control) && _b).LayersObject) === "function" && _a || Object)
], LeafletBaseLayersDirective.prototype, "baseLayers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletLayersControlOptions'),
    __metadata("design:type", typeof (_c = ((_d = (typeof __WEBPACK_IMPORTED_MODULE_1_leaflet__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_leaflet__).Control) && _d).LayersOptions) === "function" && _c || Object)
], LeafletBaseLayersDirective.prototype, "layersControlOptions", void 0);
LeafletBaseLayersDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Directive */])({
        selector: '[leafletBaseLayers]'
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__leaflet_directive__["a" /* LeafletDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__leaflet_directive__["a" /* LeafletDirective */]) === "function" && _e || Object])
], LeafletBaseLayersDirective);

var _b, _a, _d, _c, _e;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-baselayers.directive.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletControlLayersConfig; });
var LeafletControlLayersConfig = (function () {
    function LeafletControlLayersConfig(baseLayers, overlays) {
        this.baseLayers = baseLayers;
        this.overlays = overlays;
    }
    return LeafletControlLayersConfig;
}());

//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-control-layers-config.model.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leaflet_directive__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaflet_directive_wrapper__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leaflet_control_layers_wrapper__ = __webpack_require__(416);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletLayersControlDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeafletLayersControlDirective = (function () {
    function LeafletLayersControlDirective(leafletDirective) {
        this.leafletDirective = new __WEBPACK_IMPORTED_MODULE_2__leaflet_directive_wrapper__["a" /* LeafletDirectiveWrapper */](leafletDirective);
        this.controlLayers = new __WEBPACK_IMPORTED_MODULE_3__leaflet_control_layers_wrapper__["a" /* LeafletControlLayersWrapper */]();
    }
    LeafletLayersControlDirective.prototype.ngOnInit = function () {
        // Init the map
        this.leafletDirective.init();
        // Set up all the initial settings
        this.controlLayers
            .init(this.layersControlConfig, this.layersControlOptions)
            .addTo(this.leafletDirective.getMap());
    };
    LeafletLayersControlDirective.prototype.ngOnChanges = function (changes) {
        // Set the layers
        if (changes['layersControlCfg']) {
            this.controlLayers.setLayersControlConfig(changes['layersControlCfg'].currentValue, changes['layersControlCfg'].previousValue);
        }
    };
    return LeafletLayersControlDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletLayersControl'),
    __metadata("design:type", Object)
], LeafletLayersControlDirective.prototype, "layersControlConfig", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletLayersControlOptions'),
    __metadata("design:type", Object)
], LeafletLayersControlDirective.prototype, "layersControlOptions", void 0);
LeafletLayersControlDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Directive */])({
        selector: '[leafletLayersControl]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__leaflet_directive__["a" /* LeafletDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__leaflet_directive__["a" /* LeafletDirective */]) === "function" && _a || Object])
], LeafletLayersControlDirective);

var _a;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-control-layers.directive.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletLayersObjectDiff; });
var LeafletLayersObjectDiff = (function () {
    function LeafletLayersObjectDiff(remove, add) {
        this.remove = remove;
        this.add = add;
    }
    return LeafletLayersObjectDiff;
}());

//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-layers-object-diff.model.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletLayerDiff; });
var LeafletLayerDiff = (function () {
    function LeafletLayerDiff(remove, add) {
        this.remove = remove;
        this.add = add;
    }
    return LeafletLayerDiff;
}());

//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-layer-diff.model.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leaflet_directive__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaflet_directive_wrapper__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leaflet_layers_util__ = __webpack_require__(607);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletLayersDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeafletLayersDirective = (function () {
    function LeafletLayersDirective(leafletDirective) {
        this.leafletDirective = new __WEBPACK_IMPORTED_MODULE_2__leaflet_directive_wrapper__["a" /* LeafletDirectiveWrapper */](leafletDirective);
    }
    LeafletLayersDirective.prototype.ngOnInit = function () {
        // Init the map
        this.leafletDirective.init();
        // The way we've set this up, map isn't set until after the first round of changes has gone through
        this.setLayers(this.layers, []);
    };
    LeafletLayersDirective.prototype.ngOnChanges = function (changes) {
        // Set the layers
        if (changes['layers']) {
            var c = changes['layers'].currentValue;
            var p = (changes['layers'].isFirstChange()) ? [] : changes['layers'].previousValue;
            this.setLayers(c, p);
        }
    };
    /**
     * Replace the current layers in the map with the provided array
     * @param layers The new complete array of layers for the map
     */
    LeafletLayersDirective.prototype.setLayers = function (newLayers, prevLayers) {
        var map = this.leafletDirective.getMap();
        // console.log(newLayers);
        if (null != map) {
            var diff = __WEBPACK_IMPORTED_MODULE_3__leaflet_layers_util__["a" /* LeafletLayersUtil */].diffLayers(newLayers, prevLayers);
            // Remove the layers
            diff.remove.forEach(function (l) { map.removeLayer(l); });
            // Add the new layers
            diff.add.forEach(function (l) { map.addLayer(l); });
        }
    };
    return LeafletLayersDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletLayers'),
    __metadata("design:type", Array)
], LeafletLayersDirective.prototype, "layers", void 0);
LeafletLayersDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Directive */])({
        selector: '[leafletLayers]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__leaflet_directive__["a" /* LeafletDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__leaflet_directive__["a" /* LeafletDirective */]) === "function" && _a || Object])
], LeafletLayersDirective);

var _a;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-layers.directive.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__leaflet_layer_diff_model__ = __webpack_require__(605);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletLayersUtil; });

var LeafletLayersUtil = (function () {
    function LeafletLayersUtil() {
    }
    LeafletLayersUtil.diffLayers = function (newLayers, prevLayers) {
        var toRemove;
        var toAdd;
        if (null == newLayers) {
            newLayers = [];
        }
        if (null == prevLayers) {
            prevLayers = [];
        }
        // Figure out which layers need to be removed (prev - new)
        toRemove = prevLayers
            .filter(function (pl) {
            return !(newLayers.find(function (nl) { return (pl === nl); }));
        });
        // Figure out which layers need to be added (new - prev)
        toAdd = newLayers
            .filter(function (pl) {
            return !(prevLayers.find(function (nl) { return (pl === nl); }));
        });
        return new __WEBPACK_IMPORTED_MODULE_0__leaflet_layer_diff_model__["a" /* LeafletLayerDiff */](toRemove, toAdd);
    };
    return LeafletLayersUtil;
}());

//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet-layers.util.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = moveIn;
/* harmony export (immutable) */ __webpack_exports__["b"] = fallIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = moveInLeft;

function moveIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* trigger */])('moveIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: '0', transform: 'translateX(100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])('.6s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])('.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* trigger */])('fallIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: '0', transform: 'translateY(40px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])('.4s .2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])('.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* trigger */])('moveInLeft', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: '0', transform: 'translateX(-100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])('.6s .2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/routes.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__da_create_leaflet_leaflet_map_component__ = __webpack_require__(415);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main_routes; });

// import { DaCreateComponent } from "../da-create/da-create.component";
// import { DaGalleryComponent } from "../da-gallery/da-gallery.component";
// import { DaUsersComponent } from "../da-users/da-users.component";
// import { DaLoginComponent } from "../da-login/da-login.component";

// import { USER_ROUTES } from "../da-users/user.routes";
// import { GALLERY_ROUTES } from "../da-gallery/gallery.routes";
var APP_ROUTES = [
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_1__da_create_leaflet_leaflet_map_component__["a" /* LeafletMapComponent */] },
    // { path: 'create/:id', component: LeafletMapComponent },
    // { path: 'create/:id/edit', component: LeafletMapComponent },
    // { path: 'gallery', component: DaGalleryComponent, children: GALLERY_ROUTES },
    // { path: 'user', component: DaUsersComponent, children: USER_ROUTES },
    // { path: 'login', component: DaLoginComponent },
    { path: '**', redirectTo: 'map' }
];
var main_routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/main.routes.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this.appName = "comuniDADOS";
        this.isCollapsed = true;
    }
    NavComponent.prototype.navToggle = function () {
        this.isCollapsed == false ? this.isCollapsed = true : this.isCollapsed = false;
    };
    NavComponent.prototype.ngOnInit = function () { };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__(679),
        styles: [__webpack_require__(670)]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/nav.component.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/environment.js.map

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, ".main{\n  margin-top:50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, ":host{\n    position: static;\n    width: 100%;\n}\n#map {\n    position:absolute;\n    bottom:0;\n    top:50px;\n    width:100%;\n}\n#search-wrapper{\n  z-index: 1000;\n  position: absolute;\n  bottom: 10px;\n  left: 55px;\n  padding: 0px;\n}\n\n#side-bar{\n    right: 0px;\n    height: 100%;\n    width: 48px;\n    z-index: 450;\n    position: fixed;\n    background: #93a2ad;\n    background: -webkit-linear-gradient(#93a2ad, white); /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\n    background: linear-gradient(#93a2ad, white); /* Standard syntax */\n}\n\n#get-user-location-wrapper{\n  z-index: 1000;\n  position: absolute;\n  bottom: 25px;\n  right: 50px;\n  padding: 0px;\n}\n\n#get-user-location{\n  width: 36px;\n  height: 34px;\n  padding: 2px;\n  border: none;\n}\n#get-user-location:hover{\n    background: #f4f4f4;\n    background-color: #f4f4f4;\n}\n#get-user-location i{\n    font-size: 20px;\n    color: #464646;\n}\n#add-new-layer-btn {\n    bottom: 105px;\n    right: 6px;\n    position: absolute;\n    width: 36px;\n    border: none;\n}\n#add-new-layer-btn i {\n    margin-top: 3px;\n}\n\n#swipe-wrapper {\n\n}\n#swipe-wrapper > *{\n    z-index: 999;\n    background: black;\n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-bottom: 10px;\n}\n.data-viz-name{\n  text-align: center;\n  font-size: 17px;\n  padding-top: 13px;\n}\n.swipe-left-arrow{\n  text-align:left;\n  margin-left:10px;\n  font-size: 20px;\n  padding-top: 10px;\n  cursor: pointer;\n}\n.swipe-right-arrow{\n  text-align:right;\n  margin-right:10px;\n  font-size: 20px;\n  padding-top: 10px;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, ".navbar {\n    box-shadow: 2px 2px 5px #bbb;\n    background-color: #fff;\n    color: #222;\n    z-index: 9999;\n    height: 50px;\n}\n\n.app-name{\n    text-decoration: none;\n    color: #4e4e4e;\n    font-weight: 700;\n    /*text-transform: uppercase;*/\n    font-size: 16px;\n}\n\n.navbar-nav > ul > li > a:focus,\n.navbar-nav > ul > li > a:hover {\n    color: #354093;\n    background-color: none;\n}\n.navbar-nav > ul > li > a.active {\n    color: #354093;\n    font-weight: 700;\n}\n.social-id-photo {\n    border-radius: 50%;\n    height: 37px;\n    position: absolute;\n    margin: -6px 0px 0px -45px;\n    box-shadow: 1px 1px 6px #cccccc;\n}\n.sign-out{\n    cursor: pointer;\n}\n\n#collapse-button{\n    margin: 5px;\n    padding: 4px 10px;\n    cursor: pointer;\n}\n\n#collapse-button:hover{\n    background: #eeeeee;\n}\n#collapse-button:active {\n    border: inset 1px #eeeeee;\n    background: #eeeeee;\n}\n\n.navbar{\n    text-align: center;\n}\n\n/* mobile only CSS*/\n@media only screen and (max-width: 977px) {\n    .navbar{\n        padding: 0px;\n    }\n    .navbar-brand{\n        margin-top: 10px;\n    }\n    .navbar-collapse {\n        background-color: #ffffff;\n        text-align: center;\n        border-bottom: 3px solid #cccccc;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<app-nav ></app-nav>\n<div class=\"\">\n    <div class=\"main\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<!-- Map -->\n<div id=\"map\"\n\t leaflet\n \t leafletDraw >\n\t <!-- <div id=\"side-bar\">\n\t\t<button id=\"add-new-layer-btn\" class=\"btn btn-sm btn-secondary\">\n\t\t\t<i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t\t<app-pop-up-savemap [isNew]='mapIsNew'\n\t\t\t\t\t\t   (savedUpdate)='onSavedUpdate($event)'></app-pop-up-savemap>\n\t </div> -->\n</div>\n\n<div id=\"get-user-location-wrapper\" class=\"leaflet-control-layers leaflet-control\">\n\t<button id=\"get-user-location\" (click)=\"getUserLocation()\" class=\"btn btn-sm btn-outline-secondary\">\n\t   <i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>\n   </button>\n</div>\n\n<div id=\"swipe-wrapper\" class=\"row \">\n\t<div (click)=\"swipeLeft()\" class=\"swipe-left-arrow col\">\n\t\t<i class=\"fa fa-arrow-circle-left\" aria-hidden=\"true\"></i>\n\t</div>\n\t<div class=\"data-viz-name col-6\">\n\t\t<span>{{ dataVizChoice }}</span>\n\t</div>\n\t<div (click)=\"swipeRight()\" class=\"swipe-right-arrow col\">\n\t\t<i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>\n\t</div>\n</div>\n<!-- <div id=\"search-wrapper\" class=\"leaflet-control-layers leaflet-control\">\n\t<div class=\"input-group\">\n\t  <span class=\"input-group-addon\" id=\"basic-addon1\" (click)=\"test()\">\n\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t</span>\n\t\t<input type=\"text\" [(ngModel)]=\"address\" (setAddress)=\"getAddress($event)\" />\n\t</div>\n</div> -->\n<!-- <div *ngIf=\"editingForm\" id=\"pop-up\">\n\t<app-pop-up [newLayer]='popUpDetails'\n\t\t\t\t(formStatus)='formChange($event)'\n\t\t\t\t(savedDetails)='onSavedDetails($event)'>\n  </app-pop-up>\n</div> -->\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" id=\"collapse-button\" (click)=\"isCollapsed = !isCollapsed\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" >\n      <div class=\"app-name\"><img src=\"\" />{{appName}}</div>\n  </a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['about']\" routerLinkActive=\"active\" >About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['map']\" routerLinkActive=\"active\" >Maps</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['tools']\" routerLinkActive=\"active\" >Tools</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeafletDirective = (function () {
    function LeafletDirective(el) {
        this.DEFAULT_ZOOM = 1;
        this.DEFAULT_CENTER = __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"]([38.907192, -77.036871]);
        this.DEFAULT_FPZ_OPTIONS = {};
        // Default configuration
        this.options = {};
        this.fitBoundsOptions = this.DEFAULT_FPZ_OPTIONS;
        this.panOptions = this.DEFAULT_FPZ_OPTIONS;
        this.zoomOptions = this.DEFAULT_FPZ_OPTIONS;
        this.zoomPanOptions = this.DEFAULT_FPZ_OPTIONS;
        // Configure callback function for the map
        this.mapReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.element = el;
        this.baseMaps = {
            OpenStreetMap: __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
            }),
            AerialOnly: __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            }),
            AerialHybrid: __WEBPACK_IMPORTED_MODULE_1_leaflet__["layerGroup"]([
                __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                }), __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.se/hydda/roads_and_labels/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                })
            ]),
            Stamen: __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]("http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png", {
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data: &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
            }),
            CartoLight: __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            }),
            CartoDark: __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]("http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            })
        };
    }
    LeafletDirective.prototype.onUpdate = function (event) {
        // console.log(event);
        // console.log('Updated');
    };
    LeafletDirective.prototype.ngOnInit = function () {
        this.options = {
            layers: [this.baseMaps.CartoLight],
            zoomControl: false,
            scrollWheelZoom: false,
            center: __WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"](-23.6112359, -46.5899234),
            zoom: 15,
            minZoom: 4,
            maxZoom: 18,
            inertia: true,
            inertiaDeceleration: 6000,
        };
        // Create the map with some reasonable defaults
        this.map = __WEBPACK_IMPORTED_MODULE_1_leaflet__["map"](this.element.nativeElement, this.options);
        __WEBPACK_IMPORTED_MODULE_1_leaflet__["control"].layers(this.baseMaps, {}, { position: 'bottomleft' }).addTo(this.map);
        __WEBPACK_IMPORTED_MODULE_1_leaflet__["control"].zoom({ position: "bottomright" }).addTo(this.map);
        // Only setView if there is a center/zoom
        if (null != this.center && null != this.zoom) {
            this.setView(this.center, this.zoom);
        }
        // Set up all the initial settings
        if (null != this.fitBounds) {
            this.setFitBounds(this.fitBounds);
        }
        this.doResize();
        // Fire map ready event
        this.mapReady.emit(this.map);
    };
    LeafletDirective.prototype.ngOnChanges = function (changes) {
        /*
         * The following code is to address an issue with our (basic) implementation of
         * zooming and panning. From our testing, it seems that a pan operation followed
         * by a zoom operation in the same thread will interfere with eachother. The zoom
         * operation interrupts/cancels the pan, resulting in a final center point that is
         * inaccurate. The solution seems to be to either separate them with a timeout or
          * to collapse them into a setView call.
         */
        // Zooming and Panning
        if (changes['zoom'] && changes['center'] && null != this.zoom && null != this.center) {
            this.setView(changes['center'].currentValue, changes['zoom'].currentValue);
        }
        else if (changes['zoom']) {
            this.setZoom(changes['zoom'].currentValue);
        }
        else if (changes['center']) {
            this.setCenter(changes['center'].currentValue);
        }
        // Fit bounds
        if (changes['fitBounds']) {
            this.setFitBounds(changes['fitBounds'].currentValue);
        }
    };
    LeafletDirective.prototype.getMap = function () {
        return this.map;
    };
    LeafletDirective.prototype.onResize = function () {
        this.delayResize();
    };
    /**
     * Resize the map to fit it's parent container
     */
    LeafletDirective.prototype.doResize = function () {
        // Invalidate the map size to trigger it to update itself
        this.map.invalidateSize({});
    };
    /**
     * Manage a delayed resize of the component
     */
    LeafletDirective.prototype.delayResize = function () {
        if (null != this.resizeTimer) {
            clearTimeout(this.resizeTimer);
        }
        this.resizeTimer = setTimeout(this.doResize.bind(this), 200);
    };
    /**
     * Set the view (center/zoom) all at once
     * @param center The new center
     * @param zoom The new zoom level
     */
    LeafletDirective.prototype.setView = function (center, zoom) {
        if (this.map && null != center && null != zoom) {
            this.map.setView(center, zoom, this.zoomPanOptions);
        }
    };
    /**
     * Set the map zoom level
     * @param zoom the new zoom level for the map
     */
    LeafletDirective.prototype.setZoom = function (zoom) {
        if (this.map && null != zoom) {
            this.map.setZoom(zoom, this.zoomOptions);
        }
    };
    /**
     * Set the center of the map
     * @param center the center point
     */
    LeafletDirective.prototype.setCenter = function (center) {
        if (this.map && null != center) {
            this.map.panTo(center, this.panOptions);
        }
    };
    /**
     * Fit the map to the bounds
     * @param center the center point
     */
    LeafletDirective.prototype.setFitBounds = function (latLngBounds) {
        if (this.map && null != latLngBounds) {
            this.map.fitBounds(latLngBounds, this.fitBoundsOptions);
        }
    };
    return LeafletDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletFitBoundsOptions'),
    __metadata("design:type", Object)
], LeafletDirective.prototype, "fitBoundsOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletPanOptions'),
    __metadata("design:type", Object)
], LeafletDirective.prototype, "panOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletZoomOptions'),
    __metadata("design:type", Object)
], LeafletDirective.prototype, "zoomOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletZoomPanOptions'),
    __metadata("design:type", Object)
], LeafletDirective.prototype, "zoomPanOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])('leafletMapReady'),
    __metadata("design:type", Object)
], LeafletDirective.prototype, "mapReady", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletZoom'),
    __metadata("design:type", Number)
], LeafletDirective.prototype, "zoom", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletCenter'),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1_leaflet__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_leaflet__).LatLng) === "function" && _a || Object)
], LeafletDirective.prototype, "center", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])('leafletFitBounds'),
    __metadata("design:type", typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_1_leaflet__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_leaflet__).LatLngBounds) === "function" && _b || Object)
], LeafletDirective.prototype, "fitBounds", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])('window:resize', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeafletDirective.prototype, "onResize", null);
LeafletDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Directive */])({
        selector: '[leaflet]'
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */]) === "function" && _c || Object])
], LeafletDirective);

var _a, _b, _c;
//# sourceMappingURL=/Users/nathanbrigmon/Desktop/dados/src/leaflet.directive.js.map

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(465);


/***/ })

},[949]);
//# sourceMappingURL=main.bundle.js.map
