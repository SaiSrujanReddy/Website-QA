import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router) { }

  ngOnInit() {
  }
  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }
  gotoSales() {
    this.router.navigate(['/sales']);
  }
  gotopropertywise() {
   this.router.navigate(['/propertywise']);
  }
  gotoroomwise() {
    this.router.navigate(['/roomwise']);
  }
  gotoserviceticketlist() {
    this.router.navigate(['/serviceticketlist']);
  }

  //

  firstLevelDropDownMouseEnter(e) {
    // console.log(e.target.parentElement.parentElement.parentElement);
    // console.log(e.target.parentElement.parentElement.parentElement.previousElementSibling);
  e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
  }
  firstLevelDropDownMouseLeave(e) {
  // console.log(e.target.parentElement.parentElement.parentElement);
    // console.log(e.target.parentElement.parentElement.parentElement.previousElementSibling);
  e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('hover');
  }
  secondLevelDropDownMouseEnter(e) {
    // console.log(e.target.parentElement.parentElement.parentElement);
    if((e.currentTarget.innerHTML=='--- Reservation')||(e.currentTarget.innerHTML=='--- Offline Reservation') || (e.currentTarget.innerHTML=='--- Offline check-in')||(e.currentTarget.innerHTML=='--- KPI') ||(e.currentTarget.innerHTML=='--- Receipt report') ||(e.currentTarget.innerHTML=='--- Pending analysis') ||(e.currentTarget.innerHTML=='--- Move in details')) {
      e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
      e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
    }
    if((e.currentTarget.firstElementChild.firstElementChild.firstElementChild.innerText=='--- Revenue management') ||(e.currentTarget.firstElementChild.firstElementChild.firstElementChild.innerText=='--- Rate card') || (e.currentTarget.firstElementChild.firstElementChild.firstElementChild.innerText=='--- Retension management') ){
      e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
    }
  // if(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling=='')
  // e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');

  }
  secondLevelDropDownMouseLeave(e) {
  if((e.currentTarget.innerHTML=='--- Reservation')||(e.currentTarget.innerHTML=='--- Offline Reservation') || (e.currentTarget.innerHTML=='--- Offline check-in')||(e.currentTarget.innerHTML=='--- KPI') ||(e.currentTarget.innerHTML=='--- Receipt report') ||(e.currentTarget.innerHTML=='--- Pending analysis') ||(e.currentTarget.innerHTML=='--- Move in details')){
      e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('hover');
      e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('hover');
    }
  if((e.currentTarget.firstElementChild.firstElementChild.firstElementChild.innerText=='--- Revenue management') ||(e.currentTarget.firstElementChild.firstElementChild.firstElementChild.innerText=='--- Rate card') || (e.currentTarget.firstElementChild.firstElementChild.firstElementChild.innerText=='--- Retension management') ){
      e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
    }
  }
  thirdLevelDropDownMouseEnter(e) {
    console.log(e.target.parentElement.parentElement.parentElement);
    if((e.currentTarget.innerHTML=='---- Property wise')||(e.currentTarget.innerHTML=='---- Room wise') || (e.currentTarget.innerHTML=='---- Invoice')||(e.currentTarget.innerHTML=='---- Receipts') ||(e.currentTarget.innerHTML=='---- Checkout requests') ||(e.currentTarget.innerHTML=='---- Checkout forms') ||(e.currentTarget.innerHTML=='--- Move in details')){
      e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
      e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
      e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
    }
    
  // if(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling=='')
  // e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
  
  }
  thirdLevelDropDownMouseLeave(e) {
  if((e.currentTarget.innerHTML=='--- Reservation')||(e.currentTarget.innerHTML=='--- Offline Reservation') || (e.currentTarget.innerHTML=='--- Offline check-in')||(e.currentTarget.innerHTML=='--- KPI') ||(e.currentTarget.innerHTML=='--- Receipt report') ||(e.currentTarget.innerHTML=='--- Pending analysis') ||(e.currentTarget.innerHTML=='--- Move in details')){
      e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('hover');
      e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('hover');
    }
  if((e.currentTarget.firstElementChild.firstElementChild.firstElementChild.innerText=='--- Revenue management') ||(e.currentTarget.firstElementChild.firstElementChild.firstElementChild.innerText=='--- Rate card') || (e.currentTarget.firstElementChild.firstElementChild.firstElementChild.innerText=='--- Retension management') ){
      e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('hover');
    }
  }





}
