import { Directive, Output, Input, EventEmitter, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { LeafletDirective } from '../lib/leaflet.directive';
import { LeafletDirectiveWrapper } from '../lib/leaflet.directive.wrapper';
import { MapService } from "../../../shared/services/map.service";
// import { MapLayer } from "../../../shared/classes/map-layer";
// import { DDFeatureLayer } from "../../../shared/classes/feature-layer";

import * as L from 'leaflet';

@Directive({
	selector: '[leafletDraw]'
})
export class LeafletDrawDirective {

	leafletDirective: LeafletDirectiveWrapper;
	// drawControl: L.Control.Draw;
	featureGroup: L.FeatureGroup;
	tempLayer: any;
	geoJson: L.GeoJSON;

	// @Input('leafletDrawOptions')
	drawOptions: L.Control.DrawConstructorOptions = null;
	// @Output() layerPlaced = new EventEmitter<any>();

	constructor(leafletDirective: LeafletDirective,
				public mapService: MapService) {
		this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
	}

	ngOnInit() {
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
	}
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
	changeHelio(){
		//remove layer
		this.leafletDirective.getMap().removeLayer(this.featureGroup)
		console.log(this.featureGroup);
		setTimeout( () => {
			this.leafletDirective.getMap().addLayer(this.featureGroup)
		}, 5000);

		//add new layer based on selection
		// this.addHelio();
	}
	addHelio(){
		this.mapService.addHelio().subscribe((data:any) =>
		{
			function normalize(val) {
			    var delta = 4.14 - 1.5;
			        return ( (val - 1.5) / delta);
			}
			function getIndexScore(d) {
				if (d['RentPerc']){
					let quality = 1 - normalize(d['Quality']);
					let rentPerc = d['RentPerc'];
					let absentee = d['RentPercAbs'];

					let index = quality + rentPerc + absentee;
					return index;
				} else {
					// console.log("nullss");
					return "N/A"
				}
			}
			function getBlockColor(d) {
					if (d['RentPerc']){
						let quality = 1 - normalize(d['Quality']);
						let rentPerc = d['RentPerc'];
						let absentee = d['RentPercAbs'];

						let index = quality + rentPerc + absentee;
					    return index > 2.5 	? '#081E59' :
					           index > 2.0 	? '#225EA8' :
					           index > 1.5  ? '#41B7C4' :
					           index > 1.0  ? '#C6E8B3' :
					                      '#ffffd9' ;
					} else {
						// console.log("nullss");
						return "#777777"
					}
			}

			for (let obj in data.features){
				// console.log( data.features[obj] );
				L.geoJSON(data.features[obj] , {
					style: function (feature) {
						return ({
									color: "#111111",
									fillColor: getBlockColor(feature.properties),
									weight:0.5,
									opacity: 0.5,
									fillOpacity: 0.5
								});
					},
					onEachFeature: (feature, layer) => {
						layer.bindPopup(`
							<p><b>Block:</b> `+feature.properties['LABEL']+`<br>
							<p><b>Percent Renter:</b> `+feature.properties['RentPerc']+`<br>
							<p><b>Quality:</b> `+feature.properties['Quality']+`<br>
							<p><b>% Absentee:</b> `+feature.properties['RentPercAbs']+`<br>
							<p><b>Index Score:</b> `+getIndexScore(feature.properties)+`<br>

						`);
						if (feature.properties) {
							this.drawOptions.edit.featureGroup.addLayer(layer);
						}

					}
				});
			}

		//end subscribe
		});
	}
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


	initializeDrawOptions(options: L.Control.DrawConstructorOptions) {
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
			options.edit.featureGroup = L.featureGroup();
			this.leafletDirective.getMap().addLayer(options.edit.featureGroup);
		}

		return options;
	}
}
