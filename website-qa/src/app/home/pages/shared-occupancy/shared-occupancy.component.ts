import { Component, AfterViewInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { OwlcarouselService} from '../../../services/owlcarousel.service';
@Component({
  selector: 'app-shared-occupancy',
  templateUrl: './shared-occupancy.component.html',
  styleUrls: ['./shared-occupancy.component.scss']
})
export class SharedOccupancyComponent implements AfterViewInit{
  selectedValue: any;
  owlcarouseldata:any;
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 3, all: 0 },
    load: 9,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  constructor(private cdr: ChangeDetectorRef, private owl:OwlcarouselService) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.owl.OWL(this.selectedValue, (data) => {
      console.log('Selection of ShardRoom Occupancy in------->', data);
      this.owlcarouseldata = data.Data;
      console.log('SharedRoom Occupancy Component DATA---->', this.owlcarouseldata);
      });
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  
  // constructor() { }

  // ngOnInit() {
  // }

}
