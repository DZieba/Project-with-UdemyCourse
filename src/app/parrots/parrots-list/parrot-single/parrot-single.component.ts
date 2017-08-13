import {Component, OnInit, Input} from '@angular/core';
import {Parrot} from "../../parrot.model";



@Component({
  selector: 'app-parrot-single',
  templateUrl: './parrot-single.component.html',
  styleUrls: ['./parrot-single.component.css']
})
export class ParrotSingleComponent implements OnInit {
  @Input() parrot: Parrot;
  @Input() index:number;



  constructor() {
  }

  ngOnInit() {



  }
}


