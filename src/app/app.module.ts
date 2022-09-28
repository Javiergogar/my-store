import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';



@NgModule({
  declarations: [ // Los Componentes se ponen aqui
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    TopBarComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [ // Los Modules se ponen aqui
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([ 
      { path: '', component: ProductListComponent }, // En el router-outlet me genera el ProductListComponent
      { path: 'products/:productId',                 // En la direccion products/con un param(es un param por :)
      component: ProductDetailsComponent },         // se genera el ProductDetailsComponent
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },

    ]
      ) ,
      
            
             
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
