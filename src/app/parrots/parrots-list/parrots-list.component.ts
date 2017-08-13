import {Component, OnInit, OnDestroy,} from '@angular/core';
import {Parrot} from '../parrot.model';
import {ParrotsService} from "../parrots.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-parrots-list',
  templateUrl: './parrots-list.component.html',
  styleUrls: ['./parrots-list.component.css']
})
export class ParrotsListComponent implements OnInit, OnDestroy {

parrots: Parrot[];
subscription:Subscription;
  constructor(private parrotsService: ParrotsService,
  private router:Router,
  private route:ActivatedRoute) { }

  ngOnInit() {
    this.parrots=this.parrotsService.getParrots();
    this.subscription=this.parrotsService.parrotsChanged
      .subscribe(
        (parrots:Parrot[])=>{
          this.parrots=parrots;
        }
      )
  }

onParrotAdded(){
    this.router.navigate(['new-location'],{relativeTo:this.route})
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}


}
