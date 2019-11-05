import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { User} from '../../models/user';
import {Router} from '@angular/router';

// import { AuthenticationService } from '../../services/authentication.service';
import {OwlcarouselService} from '../../services/owlcarousel.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.css']
})
export class HeaderComponent implements OnInit {
    Totallocationdata: any;
    selectedValue: any;
  currentUser: User;
   constructor( public commonService: CommonService , private location: OwlcarouselService, private router: Router) {
    // this.currentUser = this.authenticationService.currentUserValue;
  }
  locationContent: boolean;
  showLocation() {
      this.locationContent = !this.locationContent;
  }
  ngOnInit() {
    $(window).scroll( function() {
      const sc = $(window).scrollTop();
      if (sc > 100) {
          $('#header-sroll').addClass('small');
      } else {
          $('#header-sroll').removeClass('small');
      }
  });
    $('.location_label').click(function() {
    $(this).css({
        "top": '0px',
        "font-size": '13px',
        "left": '12px'
    });
});

    $('#btnLocation,#MobLocbtn,#btnClose').click(function() {
if ($('#video-modal').css('display') === 'block') {
    $('.svgDownArrow').removeClass('rotate');
    $('#video-modal').slideUp(300);
    $('#MobLocbtn').css({
        'color': '#000'
    });
} else {
    $('.svgDownArrow').addClass('rotate');
    $('#video-modal').slideDown(300);
    ($(this)[0].id === 'MobLocbtn') ? $(this).css({
        'color': '#bd1261'
    }) : $('#MobLocbtn').css({
        'color': '#000'
    });
}
BindHeaderLinks();
});
    this.location.locationdata(this.selectedValue, (data) => {
    console.log('Selection of  location data ------->', data);
    this.Totallocationdata = data.Data;

    console.log('Location data in header DATA---->', this.Totallocationdata);
    });

  }

  handleLocationSearch(loc: any, city, subLoc, area ) {
    this.locationContent = false;
    this.router.navigate(['dynamiccards', city, subLoc, area, loc.Latitude, loc.Longitude, loc.Level]);
  }

 }
