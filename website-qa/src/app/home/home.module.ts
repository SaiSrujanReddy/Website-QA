import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../shared';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SalesComponent } from './pages/sales/sales.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { OwlModule } from 'ngx-owl-carousel';
import { CommunityComponent } from './pages/community/community.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { DynamicpropertiesComponent } from './pages/dynamicproperties/dynamicproperties.component';
import { BottomcarouselComponent } from './pages/bottomcarousel/bottomcarousel.component';
import { FiltercomponentComponent } from './pages/filtercomponent/filtercomponent.component';
import { DivshowhideComponent } from './pages/divshowhide/divshowhide.component';
import { SharedOccupancyComponent } from './pages/shared-occupancy/shared-occupancy.component';
import { MapviewComponent } from './pages/mapview/mapview.component';

@NgModule({
    declarations: [
        HomeComponent,
        DashboardComponent,
        SalesComponent,
        CommunityComponent,
        AboutusComponent,
        SigninComponent,
        CarouselComponent,
        DynamicpropertiesComponent,
        BottomcarouselComponent,
        FiltercomponentComponent,
        DivshowhideComponent,
        SharedOccupancyComponent,
        MapviewComponent,
    ],
    imports: [
        SharedModule,
        HomeRoutingModule,
        GooglePlaceModule,
        OwlModule,
        HttpClientModule,
    ],
    exports: [],
    providers: [],
    entryComponents: []
})
export class HomeModule {}
