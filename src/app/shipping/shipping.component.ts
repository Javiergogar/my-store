import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) { }

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  shippingCostsArray:{ type: string, price: number }[]=[];  //para hacerlo sin el async

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.shippingCosts.subscribe((valor) => {
      this.shippingCostsArray= valor;
    });  //para hacerlo sin el async

  }

}
