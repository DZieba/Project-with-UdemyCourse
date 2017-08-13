import {Component, OnInit, Input} from '@angular/core';
import {Location} from './location.model';
import {LocationsService} from './locations.service';
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  backgroundcolor='';
  filteredStatus='';
  @Input() location: Location;
  locations: Location[];
  constructor(private locService: LocationsService,
  private router:Router,
  private route:ActivatedRoute) { }

  ngOnInit() {
this.locations=this.locService.getLocations();

  }
  getClasses(location: {city:string, street:string}){
    return {
      'list-group-item-success': location.street=== 'Ptasia',
      'list-group-item-danger': location[0] === 'Katowice',
    };
  }
addLocation(){
    this.router.navigate(['new'],{relativeTo:this.route})
}








}
