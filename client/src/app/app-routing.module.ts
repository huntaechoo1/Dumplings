import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { DoughComponent } from './dough/dough.component';
import { CookComponent } from './cook/cook.component';
import { TasteComponent } from './taste/taste.component';
import { HonorComponent } from './honor/honor.component';


const routes: Routes = [
	{ path: '', pathMatch: 'full', component: AppComponent},
	{ path: 'main', component: MainComponent},
	{ path: 'ingredients', component: IngredientsComponent },
	{ path: 'dough/:_id', component: DoughComponent},
	{ path: 'cook/:_id', component: CookComponent },
	{ path: 'taste/:_id', component: TasteComponent},
	{ path: 'honor', component: HonorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
