import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {p_item} from '../../shared/p_item.model';
import {shoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription:Subscription;
  editedItemIndex:number;
  editMode=false;
  editedItem: p_item;

  constructor(private shoppingService: shoppingListService) { }

  ngOnInit() {

    this.subscription=this.shoppingService.startedEditing
      .subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shoppingService.getItem(index);

        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })

    }
    );

  }
onAddItem(form:NgForm){

const value=form.value;
const newP_item =new p_item(value.name,value.amount);
if(this.editMode){
  this.shoppingService.updateItem(this.editedItemIndex,newP_item)
}
else {
  this.shoppingService.addItem(newP_item);
}
this.editMode=false;
  form.reset();
}

onDelete(){
this.shoppingService.deleteItem(this.editedItemIndex);
}
onClear(){
  this.slForm.reset();
  this.editMode=false;
}
ngOnDestroy(){
    this.subscription.unsubscribe();

}

}
