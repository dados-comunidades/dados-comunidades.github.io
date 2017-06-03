import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { MapService } from "../../shared/services/map.service";
import { UserService } from "../../shared/services/user.service";
import { ActivityService } from "../../shared/services/activity.service";
import { UserProfile } from '../../shared/classes/user-profile';
import { DadosMap } from "../../shared/classes/dados-map";

@Component({
  selector: 'app-pop-up-savemap',
  templateUrl: './pop-up-savemap.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpSavemapComponent {

    closeResult: string;

    @Input() isNew: boolean;
    @Output() savedUpdate = new EventEmitter<any>();

    public currentMapDetails: DadosMap;
    public mapForm: FormGroup;
    public modalRef: any;
    mapAuthor: UserProfile;

    constructor(private modalService: NgbModal,
                private formBuilder: FormBuilder,
                private userService: UserService,
                private activityService: ActivityService,
                private mapService: MapService) { }

    open(content) {
      this.mapAuthor = this.userService.currentUser;
      this.currentMapDetails = this.mapService.currentMap;
      this.initForm();
      this.modalRef = this.modalService.open(content);
      this.modalRef.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

        ngOnInit() {
            //
        }

        ngOnDestroy(){
            // this.subscription.unsubscribe();
        }

        onSubmit(){
          this.modalRef.close();
          this.currentMapDetails = this.prepareFormSubmission();

          if (!this.isNew){
            console.log('this is NOT a new map...');
            this.mapService.updateMapToDB(this.currentMapDetails)
              .subscribe(
                (data: any) =>
                  {
                    console.log('....saved to firebase');
                    this.savedUpdate.emit();
                  }
              );
          } else {
            console.log('this IS a new map...');
              this.userService.currentUser.maps.push(this.mapService.currentMapKey);
              this.userService.updateUserInfo(this.userService.currentUser)
                .subscribe((data: any) => {
                    this.activityService.postActivity('user made a map');
                    console.log('..updating user');
                });
              this.mapService.postMapToDB(this.currentMapDetails)
                .subscribe(
                  (data: any) =>
                    {
                      console.log('....saved to firebase');
                      this.savedUpdate.emit();
                    }
                );
          }


        }

        private prepareFormSubmission(){
          const newMapDetails = this.mapForm.value;

          const officialMapDetails:DadosMap = {
            mapTitle: newMapDetails.mapTitle,
            mapDesc: newMapDetails.mapDesc,
            mapTags: [newMapDetails.mapTags],
            mapAuthor: this.mapAuthor['nameFirst']+" "+this.mapAuthor['nameLast'],
            mapAuthorId: this.mapAuthor['socialId'],
            mapVotes: this.currentMapDetails.mapVotes,
            mapViews: this.currentMapDetails.mapViews,
            mapImg: this.currentMapDetails.mapImg,
            dateCreated: this.currentMapDetails.dateCreated,
            dateModified: newMapDetails.dateModified,
            mapfeatureGroups: this.currentMapDetails.mapfeatureGroups
          }

          return officialMapDetails;
        }

        private initForm(){
          let dateMod: Date = new Date();
          // console.log('initializing form...');
          if (!this.isNew){
            console.log('this is not a new form... contents need updating?');
            // dateCrt = this.newLayer.dateCreated;
          } else {
            // dateCrt = new Date();
          }
          console.log(this.currentMapDetails);
          this.mapForm = this.formBuilder.group({
            mapTitle: [this.currentMapDetails.mapTitle, Validators.required],
            mapDesc: [this.currentMapDetails.mapDesc, Validators.required],
            mapTags: [this.currentMapDetails.mapTags, Validators.required],
            dateCreated: this.currentMapDetails.dateCreated,
            dateModified: dateMod
          });
        }
  }
