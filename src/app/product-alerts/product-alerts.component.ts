import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { Product } from '../products'; // Importamos la INTERFAZ Product


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: { id: number, name: string ,price: number, description: string; } /*(Product)*/ | undefined; /* Esto es para definir el product y product.price que utilizamos en el HTML
                                             la ! indica que no se va a inicializar ahi,  los : es porque se establece 
                                             el tipo de product, no es una asignacion */
  @Output() notify = new EventEmitter(); // Aqui es =
                                         
  constructor() { }

  ngOnInit(): void {
  }

}
