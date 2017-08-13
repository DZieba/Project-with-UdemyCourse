import {Location} from './location.model';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class LocationsService {
constructor(private http:Http){}


  private locations: Location[] = [
    new Location('Katowice', 'Soltysia', new Date(12, 1, 2014), 'active'),
    new Location('Kraków', 'Ptasia', new Date(1, 10, 2015), 'inactive'),
    new Location('Warszawa', 'Janicka', new Date(3, 6, 2005), 'inactive'),
    new Location('Gdańsk', 'Trzewna', new Date(7, 7, 2000), 'inactive'),
  ];


  getLocations() {
    return this.locations;

  }
  newLocation(location: Location) {
    this.locations.push(location);
    for (var i = 0; i < this.locations.length; i++) {
      console.log(this.locations[i]);
    }
  }
  updateLocations(){
    this.http.post('https://ng-http-project-3949e.firebaseio.com/data.json',this.locations).subscribe(
      (response)=> console.log(response)
    );
}

getServerLocations(){
    return this.http.get('https://ng-http-project-3949e.firebaseio.com/data.json').subscribe(
      (response:Response)=> console.log(response.json())
    )


}
}
