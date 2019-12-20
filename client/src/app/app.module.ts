import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { DoughComponent } from './dough/dough.component';
import { CookComponent } from './cook/cook.component';
import { TasteComponent } from './taste/taste.component';
import { HonorComponent } from './honor/honor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IngredientsComponent,
    DoughComponent,
    CookComponent,
    TasteComponent,
    HonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ HttpService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
