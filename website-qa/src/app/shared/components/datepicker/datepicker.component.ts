import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Input() fromdate : string ; 
  @Input() requiredField: boolean;
  @Input() getval:any;


  constructor() { }

  ngOnInit() {
   
  }

}
