import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

// Module 5
// import { CockpitComponent } from './module-5/cockpit/cockpit.component';
// import { ServerElementComponent } from './module-5/server-element/server-element.component';

// Module 3
// import { HeaderComponent } from './module-3/header/header.component';
// import { RecipesComponent } from './module-3/recipes/recipes.component';
// import { RecipeDetailComponent } from './module-3/recipes/recipe-detail/recipe-detail.component';
// import { RecipeListComponent } from './module-3/recipes/recipe-list/recipe-list.component';
// import { RecipeItemComponent } from './module-3/recipes/recipe-list/recipe-item/recipe-item.component';
// import { ShoppingListComponent } from './module-3/shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './module-3/shopping-list/shopping-edit/shopping-edit.component';

// Module 1 and 2
// import { ServerComponent } from './module-1-and-2/server/server.component';
// import { ServersComponent } from './module-1-and-2/servers/servers.component';
// import { WarningAlertComponent } from './module-1-and-2/warning-alert/warning-alert.component';
// import { SuccessAlertComponent } from './module-1-and-2/success-alert/success-alert.component';
// import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [AppComponent, GameControlComponent, OddComponent, EvenComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
