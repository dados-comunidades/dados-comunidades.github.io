import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
// import { Rating } from '../../shared/marker-rating'; not needed
import { MapService } from '../../shared/services/map.service';
import { MapLayer } from '../../shared/classes/map-layer';
import { DDFeatureLayer } from '../../shared/classes/feature-layer';
// import { GeocodingService } from '../../shared/services/geocoding.service'; not needed
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up-edit.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpEditComponent implements OnInit {

    @Input() newLayer: DDFeatureLayer;
    @Output() formStatus = new EventEmitter<string>();
    @Output() savedDetails = new EventEmitter<any>();

    public layerForm: FormGroup;
    public newLayerDetails: DDFeatureLayer;
    private isNew: boolean = true;
    private dateObj: Date;
    private subscription: Subscription;

    constructor(private formBuilder: FormBuilder,
                private mapService: MapService) {
    }

    ngOnInit() {
        this.initForm();
    }

    ngOnDestroy(){
        // needed to comment because there is no subscribe eventd
        // this.subscription.unsubscribe();
    }

    onSubmit(){
      this.newLayerDetails = this.prepareFormSubmission();
      console.log('form submitted');
      //originally saved every item,
      //now maybe just send to featureGroup on leaflet
      //and populate the main feature group object
      this.savedDetails.emit(this.newLayerDetails);

      this.formStatus.emit('complete'); //emit complete status to let parent component close window
    //   this.mapService.postLayerToDB(this.newLayerDetails)
    //     .subscribe(
    //       (data: any) =>
    //         {
    //           // this.savedDetails.emit([this.newLayerDetails, data]);
      //
    //           this.savedDetails.emit([this.newLayerDetails, data]);
    //           this.formStatus.emit('complete'); //close component window
    //         }
    //     );

    }

    onCancel(){
      console.log('cancel clicked!');
      this.formStatus.emit('cancel'); //close component window
      // remove marker

    }

    private prepareFormSubmission(){
      const newLayerDetails = this.layerForm.value;
      let shape = this.newLayer.lyrType;
      let layerGeo = this.newLayer.lyrJson;
      //generate popupcontent to geojson
      this.newLayer.lyrJson['properties']['popupContent'] = `
            <table class="table">
              <tr>
                <th>Name:</th>
                <td>`+newLayerDetails.nameOfSpace+`</td>
              </tr>
              <tr>
                <th>Rating:</th>
                <td>`+newLayerDetails.ratingOfSpace+`</td>
              </tr>
              <tr>
                <th>Comment:</th>
                <td>`+newLayerDetails.layerComment+`</td>
              </tr>
            </table>
            `;

      //layerGeo.properties.popupContent = ``;
      if (!this.isNew){
        console.log('this is not a new form... contents need updating?');
      }

      const officialLayerDetails:DDFeatureLayer = {
        lyrName: newLayerDetails.nameOfSpace,
        lyrDesc: newLayerDetails.layerComment,
        lyrRating: newLayerDetails.ratingOfSpace,
        lyrDateCreated: newLayerDetails.dateCreated,
        lyrDateModified: newLayerDetails.dateModified,
        lyrType: shape,
        lyrJson: layerGeo
      }

      return officialLayerDetails;
    }

    private initForm(){
      let nameOfSpace = '';
      let ratingOfSpace = 1;
      let layerComment = '';
      let dateCrt: Date;
      let dateMod: Date = new Date();
      // console.log('initializing form...');
      if (!this.isNew){
        console.log('this is not a new form... contents need updating?');
        // dateCrt = this.newLayer.dateCreated;
      } else {
        // dateCrt = new Date();
      }

      this.layerForm = this.formBuilder.group({
        nameOfSpace: [nameOfSpace, Validators.required],
        ratingOfSpace: [ratingOfSpace, Validators.required],
        layerComment: [layerComment, Validators.required],
        dateCreated: this.newLayer.lyrDateCreated,
        dateModified: dateMod
      });
    }



}
