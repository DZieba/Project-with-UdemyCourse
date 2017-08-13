import {p_item} from '../shared/p_item.model'
import {Subject} from 'rxjs/Subject';

export class shoppingListService {
  itemsChanged=new Subject<p_item[]>() ;
  startedEditing=new Subject<number>();
private p_items: p_item[] = [
    new p_item('nuts', 20),
    new p_item('bananas', 4),
  ];
getItems(){
  return this.p_items.slice();
}
getItem(index:number){
  return this.p_items[index];

}
  addItem(p_item: p_item) {
    this.p_items.push(p_item);
    this.itemsChanged.next(this.p_items.slice());
  }

  addItems(p_items:p_item[]){
  this.p_items.push(...p_items);
  this.itemsChanged.next(this.p_items.slice());
  }
  updateItem(index:number, newItem:p_item) {
  this.p_items[index]=newItem;
  this.itemsChanged.next(this.p_items.slice());
  }

  deleteItem(index:number){
this.p_items.splice(index,1);
this.itemsChanged.next(this.p_items.slice());
  }

}
