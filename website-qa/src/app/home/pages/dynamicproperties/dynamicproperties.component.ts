import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { OwlcarouselService} from '../../../services/owlcarousel.service';
import { ActivatedRoute } from '@angular/router';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-dynamicproperties',
  templateUrl: './dynamicproperties.component.html',
  styleUrls: ['./dynamicproperties.component.scss']
})
export class DynamicpropertiesComponent implements OnInit {
  favoriteSeason: string;
  propertydata: any;
  selectedValue: any;
  locationContent: boolean;
  seasons: string[] = ['SharedRoom', 'SingleRoom', 'CoupleRoom'];
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  // filterType: any;
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

    constructor(private cdr: ChangeDetectorRef,  private owl: OwlcarouselService, private route: ActivatedRoute) {
    }
    ngAfterViewInit() {
      this.cdr.detectChanges();
    }

    reset() {
      this.myCarousel.reset(!this.resetAnim);
    }
    moveTo(slide) {
      this.myCarousel.moveTo(slide, !this.withAnim);
    }

    ngOnInit(): void {
      this.getProperties('');
    }

    getProperties(Category) {
      var requstData = {
        "Date": new Date(),
        "LocationName": this.route.snapshot.params.city,
        "OfferId": 0,
        "RoomTypeIds": '',
        "RoomSubTypeIds":  '',
        "RoomClassIds": '',
        "FurnishStatusIds": '',
        "Latitude": this.route.snapshot.params.lat,
        "Longitude": this.route.snapshot.params.lng,
        "Distance": this.route.snapshot.params.rad,
        "RoomShareCategory": Category,
        'MinValue': '',
        'MaxValue': ''
      };
      console.log('Request data for locations filter -->', requstData);
      this.owl.Findmyhome(requstData, (data) => {

            console.log('Selection of property details data ------->', data);
            this.propertydata = data.Data;
            console.log('property deatils DATA---->', this.propertydata );
            });
    }

    radioChange(event: MatRadioChange) {
      const filterType =  event.value;
      console.log('filterType -------------->', filterType);
      this.getProperties(filterType);
    }
    public show:boolean = false;
    public buttonName:any = 'Show';
  
    // ngOnInit () {  }

    toggle() {
      this.show = !this.show;
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show)  
        this.buttonName = "Hide";
      else
        this.buttonName = "Show";
    }
}
