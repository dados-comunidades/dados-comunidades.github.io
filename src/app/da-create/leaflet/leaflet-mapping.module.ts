import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { LeafletModule } from './lib/leaflet.module';
import { LeafletDrawModule } from './leaflet-draw/leaflet-draw.module';
import { LeafletMapComponent } from './leaflet-map.component';
// import { PopUpEditComponent } from "../pop-up/pop-up-edit.component";

import { MapService } from "../../shared/services/map.service";


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { PopUpSavemapComponent } from "../pop-up/pop-up-savemap.component";

@NgModule({
  declarations: [
    LeafletMapComponent,
    // PopUpEditComponent,
    // PopUpSavemapComponent
  ],
  imports: [
    HttpModule,
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    LeafletModule,
	LeafletDrawModule
  ],
  providers: [
    MapService
  ],
  exports: [
    LeafletMapComponent
  ],
  bootstrap: [ LeafletMapComponent ],
})
export class LeafletMappingModule { }
