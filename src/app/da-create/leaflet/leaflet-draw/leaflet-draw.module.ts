import { ModuleWithProviders, NgModule } from '@angular/core';
import { LeafletModule } from '../lib/leaflet.module';
import { LeafletDrawDirective } from './leaflet-draw.directive';
import { MapService } from "../../../shared/services/map.service";

@NgModule({
	imports: [
		LeafletModule
	],
	exports: [
		LeafletDrawDirective
	],
	declarations: [
		LeafletDrawDirective
	],
	providers:[
		MapService
	]
})
export class LeafletDrawModule {

	static forRoot(): ModuleWithProviders {
		return { ngModule: LeafletDrawModule, providers: [] };
	}

}
