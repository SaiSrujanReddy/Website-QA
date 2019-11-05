import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { OwlcarouselService} from '../../services/owlcarousel.service';
import { DynamicpropertiesComponent} from './dynamicproperties/dynamicproperties.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    owlcarouseldatalist: any;
    owlcarouseldata: any;
    selectedValue: any;
    SharedRoom: any;
    name = 'Angular';
    slideNo = 0;
    withAnim = true;
    resetAnim = true;
    city: any;
    subLoc: any;
    area: any;
    loc: any;

    @ViewChild('myCarousel') myCarousel: NguCarousel<any>;

  public carouselTileItems = [];
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 3, all: 0 },
    load: 3,
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1500 },
  };
  tempData1: any[];

    constructor(private cdr: ChangeDetectorRef,  private owl: OwlcarouselService, private router: Router) {
    }
    selectedCity: string = "";
    shareType: number = 0;
    googleAddress: any;

    ngAfterViewInit() {
      this.cdr.detectChanges();
    }

    reset() {
      this.myCarousel.reset(!this.resetAnim);
    }
    moveTo(slide) {
      this.myCarousel.moveTo(slide, !this.withAnim);
    }
    @ViewChild('placesRef') placesRef : GooglePlaceDirective;

    changeCity(e) {
      console.log('City -->', e.target.value);
      this.selectedCity = e.target.value;
    }

    changeShareType(e) {
      this.shareType = e.target.value;
      console.log('share type-->', this.shareType);
    }
    searchdetail() {

    }

    handleSearch() {
      let ltd = this.googleAddress.geometry.location.lat();
      let lng = this.googleAddress.geometry.location.lng();
      this.router.navigate(['dynamiccards', this.selectedCity, '' , '', ltd, lng, this.shareType]);
      this.router.navigate(['dynamiccards', city, subLoc, area, loc.Latitude, loc.Longitude, loc.Level]);
    }

    public handleAddressChange(address: any) {
    // Do some stuff
    console.log('Address change----->', address);
    this.googleAddress = address;
    }

    ngOnInit(): void {
        // this.selectedValue = 0;
        console.log('Home component it......');
        this.owl.OWL(this.selectedValue, (data) => {
            console.log('Selection of apartment with help of location id ------->', data);
            this.owlcarouseldata = data.Data;
            console.log('OWL CAROUSEL DATA in Tabs---->', this.owlcarouseldata);
            });
    }
}
