import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ParrotsService} from "../parrots.service";
import {Parrot} from "../parrot.model";


@Component({
  selector: 'app-parrot-edit',
  templateUrl: './parrot-edit.component.html',
  styleUrls: ['./parrot-edit.component.css']
})
export class ParrotEditComponent implements OnInit {
id:number;
editMode=false;
parrotForm:FormGroup;
  constructor(private route:ActivatedRoute,
  private parrotServie:ParrotsService,
  private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        console.log(this.editMode);
        this.initForm();
      }
    )
  }
  onSubmit(){
    const newParrot= new Parrot(this.id,this.parrotForm.value['name'],this.parrotForm.value['imageUrl'],this.parrotForm.value['description'])
    if(this.editMode){
      this.parrotServie.updateParrot(this.id,newParrot)
    }
    else {
      this.parrotServie.addParrot(newParrot)

    }
  }
  onCancel(){
this.router.navigate(['../'],{relativeTo:this.route})
  }

  private initForm(){
    let parroturl='';
    let parrotname='';
    let description='';
    if(this.editMode){
      const parrot=this.parrotServie.getParrot(this.id);
      parrotname=parrot.name;
      parroturl=parrot.imagePath;
      description=parrot.description;
    }
    this.parrotForm=new FormGroup({
      'name': new FormControl(parrotname,Validators.required),
      'imageUrl': new FormControl(parroturl,Validators.required),
      'description': new FormControl(description,Validators.required)
    });
  }
}
