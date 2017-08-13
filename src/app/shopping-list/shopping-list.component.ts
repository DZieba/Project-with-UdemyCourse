import {Component, OnInit, OnDestroy} from '@angular/core';
import {p_item} from '../shared/p_item.model'
import {shoppingListService} from './shopping-list.service';
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
p_items: p_item[];
private subscription: Subscription;
  constructor(private shoppingService: shoppingListService) { }

  ngOnInit() {
    this.p_items=this.shoppingService.getItems();
    this.subscription=this.shoppingService.itemsChanged.subscribe((p_items :p_item[])=> {
      this.p_items = p_items;
    }
    );
  }
  onEditItem(index:number){
this.shoppingService.startedEditing.next(index);

  }
ngOnDestroy(){
this.subscription.unsubscribe();
}
deleteItem(i:number){
  this.shoppingService.deleteItem(i)
}

}
