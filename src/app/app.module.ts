
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParrotsComponent } from './parrots/parrots.component';
import { LocationsComponent } from './locations/locations.component';
import { ParrotsListComponent } from './parrots/parrots-list/parrots-list.component';
import { ParrotInfoComponent } from './parrots/parrot-info/parrot-info.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ParrotSingleComponent } from './parrots/parrots-list/parrot-single/parrot-single.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {ParrotsService} from "./parrots/parrots.service";
import {shoppingListService} from "./shopping-list/shopping-list.service";
import { LocSingleComponent } from './locations/loc-single/loc-single.component';
import {LocationsService} from "./locations/locations.service";

import {AppRoutingModule} from "./app-routing.module";
import { ParrotsStartComponent } from './parrots/parrots-start/parrots-start.component';
import { ParrotEditComponent } from './parrots/parrot-edit/parrot-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewLocationComponent} from "./locations/new-location/new-location.component";
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.pipe';
import {HttpModule} from "@angular/http";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParrotsComponent,
    LocationsComponent,
    ParrotsListComponent,
    ParrotInfoComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ParrotSingleComponent,
    DropdownDirective,
    LocSingleComponent,
    ParrotsStartComponent,
    ParrotEditComponent,
    NewLocationComponent,
    FilterPipe,
    ReversePipe



  ],
  imports: [AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [ParrotsService,shoppingListService,LocationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
