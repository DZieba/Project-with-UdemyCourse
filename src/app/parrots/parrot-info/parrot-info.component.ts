import {Component, OnInit, Input} from '@angular/core';
import {Parrot} from "../parrot.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ParrotsService} from "../parrots.service";

@Component({
  selector: 'app-parrot-info',
  templateUrl: './parrot-info.component.html',
  styleUrls: ['./parrot-info.component.css']
})
export class ParrotInfoComponent implements OnInit {
 parrot: Parrot;
 id:number;
  constructor(private route: ActivatedRoute,
              private router:Router,
              private parrotsService: ParrotsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=> {
        this.id=+params['id'];
        this.parrot=this.parrotsService.getParrot(this.id);
      }
    );
  }
  onEditParrot(){
this.router.navigate(['edit'],{relativeTo:this.route})
  }
  deleteParrot(){
this.parrotsService.deleteParrot(this.id)
  }

}
