import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor(public dataServices:DataService) { }
  progressBar:any;
  ngOnInit() {
    
    console.log(this.dataServices.progressBarList);
   this.progressBar=this.dataServices.progressBarList;
   
   //this.progressBar.daysleft=this.progressBar.total_count-this.progressBar.used_count;
  }

}
