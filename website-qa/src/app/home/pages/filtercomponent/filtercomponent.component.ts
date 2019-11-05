import { Component, OnInit } from '@angular/core';
import {OwlcarouselService} from '../../../services/owlcarousel.service';
@Component({
  selector: 'app-filtercomponent',
  templateUrl: './filtercomponent.component.html',
  styleUrls: ['./filtercomponent.component.scss']
})
export class FiltercomponentComponent implements OnInit {
   filterlist: any;
   totaldata: any;

  constructor() { }

  ngOnInit() {
  }

}
