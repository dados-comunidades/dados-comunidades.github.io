import { Injectable, EventEmitter } from '@angular/core';
// import { MapLayer } from '../classes/map-layer';
// import { GalleryMap } from '../classes/gallery-map';
// import { DadosMap } from '../classes/dados-map';
// import { DDFeatureGroup } from '../classes/feature-group';
// import { DDFeatureLayer } from '../classes/feature-layer';
// import { IMapLayer } from '../interfaces/map-layer.interface';
// import { IGalleryMap } from '../interfaces/gallery-map.interface';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

// import { ActivityService } from "./activity.service";
// import { AuthService } from "./auth.service";

  @Injectable()
export class MapService {
    // public currentMap:DadosMap;
    public currentMapKey:string;

    constructor( private http: Http
        // private activity:ActivityService, private auth: AuthService
    ) { }

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
    addHelio(){
            return this.http.get('../../../assets/heliopolis_w_att.geojson')
              .map( (response: Response) => response.json() )
              .catch(this.handleError);
    }

    private handleError(err:any){
        console.log(err);
        return Observable.throw(err);
    }
}
