import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { UserService } from "../../shared/services/user.service";
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { UserProfile } from "../../shared/classes/user-profile";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['../da-users.component.css']
})
export class UserEditComponent implements OnInit {

    public userForm: FormGroup;
    private user: UserProfile;
    private socialId: string;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private userService: UserService,
                private router: Router) {
                    this.user = userService.currentUser;
                }

    ngOnInit() {
        this.initForm();
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                console.log(params);
                this.socialId = params['id'];
            // this.profile = this.userService.getCurrentUser();
            }
        );
    }
    onSubmit(){
        //prepare form by combining exists db info and form info
        const userDetails = this.prepareFormSubmission();
        console.log('form submitted');
        //originally saved every item,
        this.userService.updateUserInfo(userDetails).subscribe(
            (results:any) => {
                console.log(results);
                console.log('saved to db');
            }
        );
        this.router.navigate(['/user/profile', this.socialId]);
    }
    onCancelProfile(){
        this.router.navigate(['/user/profile', this.socialId]);
    }
    private prepareFormSubmission(){
        const formDetails = this.userForm.value;

        const prepDetails:UserProfile = {
            socialId: this.user.socialId,
            nameFirst: formDetails.nameFirst,
            nameLast: formDetails.nameLast,
            email: formDetails.email,
            location: formDetails.location,
            profType: formDetails.profType,
            profDesc: formDetails.profDesc,
            profImg: this.user.profImg,
            profKarma: this.user.profKarma,
            loginCount: this.user.loginCount,
            maps: this.user.maps,
            dateCreated: this.user.dateCreated
        };

      return prepDetails;
    }

    private initForm(){
      this.userForm = this.formBuilder.group({
            nameFirst: [this.user.nameFirst, Validators.required],
            nameLast: [this.user.nameLast, Validators.required],
            email: [this.user.email, Validators.required],
            location: [this.user.location, Validators.required],
            profType: [this.user.profType, Validators.required],
            profDesc: [this.user.profDesc, Validators.required],
      });
    }

}
