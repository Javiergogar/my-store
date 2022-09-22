import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [ // Los Componentes se ponen aqui
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    TopBarComponent,
    CartComponent
  ],
  imports: [ // Los Modules se ponen aqui
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ 
      { path: '', component: ProductListComponent }, // En el router-outlet me genera el ProductListComponent
      { path: 'products/:productId',                 // En la direccion products/con un param(es un param por :)
      component: ProductDetailsComponent },         // se genera el ProductDetailsComponent
      { path: 'cart', component: CartComponent }]) ,      
             
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
