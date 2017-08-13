import { Component, OnInit } from '@angular/core';
import {ParrotsService} from "./parrots.service";

@Component({
  selector: 'app-parrots',
  templateUrl: './parrots.component.html',
  styleUrls: ['./parrots.component.css'],
  providers:[ParrotsService]
})
export class ParrotsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
