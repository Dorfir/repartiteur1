import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';

import { AccordionModule } from "ngx-bootstrap/accordion";

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
