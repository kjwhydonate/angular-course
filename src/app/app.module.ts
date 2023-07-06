import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Module 11
import { HomeComponent } from './module-11/home/home.component';
import { UsersComponent } from './module-11/users/users.component';
import { ServersComponent } from './module-11/servers/servers.component';
import { UserComponent } from './module-11/users/user/user.component';
import { EditServerComponent } from './module-11/servers/edit-server/edit-server.component';
import { ServerComponent } from './module-11/servers/server/server.component';
import { ServersService } from './module-11/servers/servers.service';
import { PageNotFoundComponent } from './module-11/page-not-found/page-not-found.component';
import { AppRoutingModule } from './module-11/app-routing.module';
import { AuthService } from './module-11/auth.service';
import { AuthGuard } from './module-11/auth-guard.service';
import { CanDeactivateGuard } from './module-11/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './module-11/error-page/error-page.component';
import { ServerResolver } from './module-11/servers/server/server-resolver.service';


// Module 10
// import { HeaderComponent } from './module-10/header/header.component';
// import { RecipesComponent } from './module-10/recipes/recipes.component';
// import { RecipeListComponent } from './module-10/recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './module-10/recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './module-10/recipes/recipe-list/recipe-item/recipe-item.component';
// import { ShoppingListComponent } from './module-10/shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './module-10/shopping-list/shopping-edit/shopping-edit.component';
// import { DropdownDirective } from './module-10/shared/dropdown.directive';
// import { ShoppingListService } from './module-10/shopping-list/shopping-list.service';

// Module 9
// import { AccountComponent } from './module-9/account/account.component';
// import { NewAccountComponent } from './module-9/new-account/new-account.component';

// Module 8
// import { HeaderComponent } from './module-8/header/header.component';
// import { RecipesComponent } from './module-8/recipes/recipes.component';
// import { RecipeListComponent } from './module-8/recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './module-8/recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './module-8/recipes/recipe-list/recipe-item/recipe-item.component';
// import { ShoppingListComponent } from './module-8/shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './module-8/shopping-list/shopping-edit/shopping-edit.component';
// import { DropdownDirective } from './module-8/shared/dropdown.directive';

// Module 7
// import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
// import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
// import { UnlessDirective } from './unless.directive';

// Module 6
// import { HeaderComponent } from './module-6/header/header.component';
// import { RecipesComponent } from './module-6/recipes/recipes.component';
// import { RecipeDetailComponent } from './module-6/recipes/recipe-detail/recipe-detail.component';
// import { RecipeListComponent } from './module-6/recipes/recipe-list/recipe-list.component';
// import { RecipeItemComponent } from './module-6/recipes/recipe-list/recipe-item/recipe-item.component';
// import { ShoppingListComponent } from './module-6/shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './module-6/shopping-list/shopping-edit/shopping-edit.component';

// Module 5
// import { GameControlComponent } from './ngmodule-5/assignment-4/game-control/game-control.component';
// import { OddComponent } from './module-5/assignment-4/odd/odd.component';
// import { EvenComponent } from './module-5/assignment-4/even/even.component';
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
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
