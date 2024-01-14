import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDeatilComponent } from './product-deatil/product-deatil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    ProductDeatilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Para formularios de tipo Plantilla
    ReactiveFormsModule // Para formularios de tipo Reactive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
