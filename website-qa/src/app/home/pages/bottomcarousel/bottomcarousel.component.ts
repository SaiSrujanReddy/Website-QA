import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
@Component({
  selector: 'app-bottomcarousel',
  templateUrl: './bottomcarousel.component.html',
  styleUrls: ['./bottomcarousel.component.scss']
})
export class BottomcarouselComponent implements OnInit {
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  constructor(private cdr: ChangeDetectorRef) {}
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  };

  ngOnInit(): void {

  }

}


  // ngAfterViewInit() {
  //   this.cdr.detectChanges();
  // }

  // reset() {
  //   this.myCarousel.reset(!this.resetAnim);
  // }

  // moveTo(slide) {
  //   this.myCarousel.moveTo(slide, !this.withAnim);
  // }

// }
