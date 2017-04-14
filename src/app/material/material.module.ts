import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*import {
    //MdRippleModule,
    //RtlModule,
    //ObserveContentModule,
    //PortalModule,
    //OverlayModule,
    //A11yModule,
    //CompatibilityModule,
    
    //MdButtonToggleModule,
    MdButtonModule,
    //MdCheckboxModule,
    //MdRadioModule,
    MdSelectModule,
    //MdSlideToggleModule,
    //MdSliderModule,
    //MdSidenavModule,
    //MdListModule,
    //MdGridListModule,
    //MdCardModule,
    //MdChipsModule,
    MdIconModule,
    //MdProgressSpinnerModule,
    //MdProgressBarModule,
    //MdInputModule,
    //MdSnackBarModule,
    //MdTabsModule,
    //MdToolbarModule,
    //MdTooltipModule,
    //MdMenuModule,
    //MdDialogModule,
    //PlatformModule,
    //MdAutocompleteModule,
    //StyleModule,
} from '@angular/material';*/

import { MaterialModule as MatModule } from '@angular/material';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialHomeComponent } from './home/material-home.component';

@NgModule( {
    imports: [
        CommonModule,
/*
//        MdRippleModule,
//        RtlModule,
//        ObserveContentModule,
//        PortalModule,
//        OverlayModule,
//        A11yModule,
//        CompatibilityModule,
//    
        MdButtonModule,
        MdSelectModule,
        MdIconModule,
//        PlatformModule,
//        StyleModule,
*/
        MatModule,

        MaterialRoutingModule,
    ],
    declarations: [
        MaterialHomeComponent,
    ]
})
export class MaterialModule { }
