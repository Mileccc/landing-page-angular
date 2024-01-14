import { Component } from '@angular/core';
import {Product, productsList} from '../product/product.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = productsList;

}
