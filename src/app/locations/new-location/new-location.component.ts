import {Component, OnInit, ViewChild} from '@angular/core';
import {LocationsService} from "../locations.service";
import {Location} from '../location.model';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-new',
  templateUrl: 'new-location.component.html',
  styleUrls: ['new-location.component.css']
})
export class NewLocationComponent implements OnInit {
  @ViewChild('f') locForm: NgForm;

  constructor(private locService: LocationsService) { }

  ngOnInit() {
  }

  newLocation:Location;
onAddLocation(form:NgForm){
  this.newLocation=new Location(form.value.city,form.value.street,form.value.started,form.value.status,)
    this.locService.newLocation(this.newLocation);
}

storeLocations(){
  this.locService.updateLocations()

}
getServer(){
  this.locService.getServerLocations()
}


}
