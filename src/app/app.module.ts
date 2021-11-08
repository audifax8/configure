import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { ConfigureContainerComponent } from './components/configure-container/configure-container.component';
import { SwatchComponent } from './components/swatch/swatch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    MenuComponent,
    AddToCartComponent,
    ConfigureContainerComponent,
    SwatchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
