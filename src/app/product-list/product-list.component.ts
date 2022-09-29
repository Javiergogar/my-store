import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  /*products = products; /* El products de la Izq es el nombre de la propiedad de la clase, mientras que el
                          de la derecha se refiere al products de la linea 2, no necesita this al importarse arriba
                          el usar this.products haria referencia al product de la Izq */

                  
  constructor(private productService: ProductService) { }

  products!: Observable<{ id: number, name: string ,price: number, description: string; }[]>;


  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  
  share() {
    window.alert('The product has been shared!');
    }

  onNotify() { window.alert('You will be notified when the product goes on sale');}

}
