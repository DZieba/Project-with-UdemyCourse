import {NgModule} from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { ParrotsComponent } from './parrots/parrots.component';
import { LocationsComponent } from './locations/locations.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {Routes,RouterModule} from '@angular/router';
import {ParrotInfoComponent} from "./parrots/parrot-info/parrot-info.component";
import {ParrotsStartComponent} from "./parrots/parrots-start/parrots-start.component";
import {ParrotEditComponent} from "./parrots/./parrot-edit/parrot-edit.component";
import {NewLocationComponent} from "./locations/new-location/new-location.component";
import {EmptyComponent} from "./locations/empty.component";
const appRoutes: Routes=[
  {path:'', redirectTo:'/parrots', pathMatch: 'full'},
  {path:'parrots', component: ParrotsComponent,children:[
    {path:'', component:ParrotsStartComponent},
    {path:':id', component:ParrotInfoComponent},
    {path:':id/:edit', component:ParrotEditComponent}
  ]},
  {path:'locations', component: LocationsComponent,children:[
    {path:'new', component:NewLocationComponent}
    ]},
  {path:'shopping_list', component: ShoppingListComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
