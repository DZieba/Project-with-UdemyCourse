import { Component, OnInit,Input } from '@angular/core';
import {Location} from '../location.model';
import {LocationsService} from '../locations.service';
@Component({
  selector: 'app-loc-single',
  templateUrl: './loc-single.component.html',
  styleUrls: ['./loc-single.component.css']
})
export class LocSingleComponent implements OnInit {
@Input() location: Location;
randomColor=this.getRandomColor();

  constructor(private locationsService: LocationsService) { }

  ngOnInit() {

  }
  getRandomColor(){
    let letters='0123456789ABCDEF'.split('');
    let color='#';
    for (let i =0; i<6;i++){
      color+=letters[Math.floor(Math.random()*16)];
    }
    console.log(color)
    return color;

  }

}
