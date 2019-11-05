import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

// import {PropertyWiseModule} from '../propertywise/propertywise.module';
import { DataService } from '../shared/services/data.service';
import { CommonService } from '../shared/services/common.service';
import { NguCarouselModule } from '@ngu/carousel';

import { DatepickerComponent } from '../shared/components/datepicker/datepicker.component';
import { ProgressBarComponent } from '../shared/components/progress-bar/progress-bar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule,
        NguCarouselModule
        // PropertyWiseModule
    ],
    declarations: [
        DatepickerComponent,
        ProgressBarComponent
    ],
    entryComponents: [ ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MaterialModule,
      DatepickerComponent,
      ProgressBarComponent,
      NguCarouselModule

    ],
    providers: [DataService, CommonService],
})
export class SharedModule { }
